import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";

import User from "../../../models/User";
import dbConnect from "../../../lib/dbConnect";
import { verifyPassword } from "../../../lib/auth-utils";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.auth_secret,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},

      async authorize(credentials: any) {
        await dbConnect();
        const user = await User.findOne({ email: credentials.email }).select("email password");

        if (!user) {
          throw new Error("User not found");
        }

        const isValid = await verifyPassword(credentials.password, user.password);

        if (!isValid) {
          throw new Error("Wrong password");
        }

        return { email: user.email };
      },
    }),
  ],
});
