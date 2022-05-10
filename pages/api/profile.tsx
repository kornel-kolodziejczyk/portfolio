import { NextApiRequest, NextApiResponse } from "next";

import User from "../../models/User";
import dbConnect from "../../lib/dbConnect";
import { hashPassword, verifyPassword } from "../../lib/auth-utils";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "PATCH") {
    const { email, currentPassword, newPassword } = req.body;

    try {
      await dbConnect();
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const passwordsAreEqual = await verifyPassword(currentPassword, user.password);

      if (!passwordsAreEqual) {
        return res.status(403).json({ message: "Invalid passwords" });
      }

      const hashedPassword = await hashPassword(newPassword);
      user.password = hashedPassword;
      await user.save();
    } catch (error) {
      return res.status(500).json({ message: "Could not update profile" });
    }

    res.status(201).json({ message: "Successfully updated profile" });
  }
};
