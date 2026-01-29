// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { newMemberTemplate, newVolunteerTemplate, sendEmail } from '@/utils/ServerUtils'
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
      const response = await sendEmail(["agirar.2013@gmail.com"], "Pedido de Voluntariado", newVolunteerTemplate(body))
      res.json({
        error: false,
        msg: "Muito obrigado pela sua contribuição! Cada gesto vale a pena! Iremos certamente entrar em contacto consigo brevemente. 😃"
      })
      break;

    default:
      res.status(404).json({ error: true, msg: "O endpoit que tentou aceder não está disponível." })
      break;
  }
}
