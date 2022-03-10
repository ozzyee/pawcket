// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
   const refreshToken = req.body.refreshToken;

   res.setHeader(
      "set-cookie",
      cookie.serialize("token", refreshToken, {
         httpOnly: true,
         maxAge: 60 * 60 * 60,
         sameSite: true,
         path: "/",
      })
   );

   res.status(200);
   res.json({ success: true });
}
