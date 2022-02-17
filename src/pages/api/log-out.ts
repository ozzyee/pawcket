// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

type Data = {
   success: boolean;
};

export default function handler(
   req: NextApiRequest,
   res: NextApiResponse<Data>
) {
   res.setHeader(
      "set-cookie",
      cookie.serialize("token", "", {
         httpOnly: true,
         sameSite: true,
         path: "/",
      })
   );

   res.status(200);
   res.json({ success: true });
}
