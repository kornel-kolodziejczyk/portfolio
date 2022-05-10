import { NextApiRequest, NextApiResponse } from "next";

import Message from "../../models/Message";
import dbConnect from "../../lib/dbConnect";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (!email || !email.includes("@") || !name || name.trim() === "" || !text || text.trim() === "") {
      return res.status(422).json({ message: "Invalid message inputs." });
    }

    try {
      await dbConnect();
    } catch (error) {
      return res.status(500).json({ message: "Could not connect to database" });
    }

    try {
      const message = new Message({ date: new Date(), email, name, text });
      await message.save();
    } catch (error) {
      return res.status(500).json({ message: "Could not save a message" });
    }

    res.status(201).json({ message: "Successfully sended message" });
  }
};
