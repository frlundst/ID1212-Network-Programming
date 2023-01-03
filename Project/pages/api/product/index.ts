import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma"

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const { title, content } = req.body;

    const result = await prisma
    
    /*const result = await prisma.post.create({
      data: {
        title: title,
        content: content,
        author: { connect: { email: session?.user?.email } },
      },
    });*/
    res.json(result);
  }