import { NextApiRequest, NextApiResponse } from "next";

import Message from "../../models/Message";
import dbConnect from "../../lib/dbConnect";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      await dbConnect();
      const messages = await Message.find().sort({ date: -1 });
      res.status(200).json(messages);
    } catch (error) {
      return res.status(500).json({ message: "Could not load messages" });
    }
  }

  if (req.method === "DELETE") {
    const { _id } = req.body;

    try {
      await dbConnect();
      const message = await Message.findById(_id);

      if (!message) {
        return res.status(404).json({ message: "Could not find message" });
      }

      await message.remove();
      res.status(200).json({ message });
    } catch (error) {
      return res.status(500).json({ message: "Could not connect to database" });
    }
  }
};
