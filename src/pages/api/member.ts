// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { newMemberTemplate, sendEmail } from '@/utils/ServerUtils'
import type { NextApiRequest, NextApiResponse } from 'next'
const { MailtrapClient } = require("mailtrap")

type Data = {
  msg?: string
  error: boolean
}

const client = new MailtrapClient({ token: process.env.TOKEN })

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { body, method } = req
  switch (method) {
    case "POST":
      const response = await sendEmail(["agirar.2013@gmail.com"], "Nova Contribuição", newMemberTemplate(body))
      res.json({
        error: false,
        msg: "Muito obrigado pela sua contribuição! Cada gesto vale a pena!"
      })
      break;

    default:
      res.status(404).json({ error: true, msg: "O endpoit que tentou aceder não está disponível." })
      break;
  }
}
