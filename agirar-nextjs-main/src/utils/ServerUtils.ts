import moment from "moment";
import { TMembroFrom, TVolunteerFrom } from "./Utils";

const nodemailer = require("nodemailer");

export const sendEmail = async (to: string[], subject: string, template: string)=>{
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: process.env.EMAIL,
          pass: process.env.PASS,
        },
      });
      return await transporter.sendMail({
        from: process.env.EMAIL, // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        html: template, // html body
      });
    
}

export const newMemberTemplate = (body: TMembroFrom)=>{
    const {
        nome,
        email,
        telefone,
        dataNascimento,
        morada,
        codPostal,
        localidade,
        nif,
        tipo,
        valor,
        freq,
        modo,
    } = body

    return `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        </head>
        <body>
            <p>
                <h2>
                NOVA CONTRIBUIÇÃO 
                </h2>    
            </p>
            <p>
                Nome: ${nome}
            </p>
            <p>
                Email: ${email}
            </p>
            <p>
                Telefone: ${telefone}
            </p>
            <p>
                Data de nascimento: ${moment(dataNascimento).format("DD/MM/YYYY")}
            </p>
            <p>
                Morada: ${morada}, ${codPostal}, ${localidade}
            </p>
            <p>
                NIF: ${nif}
            </p>
            <p>
                Tipo de Contribuição: ${tipo === "unico" ? "Donativo": "Sócio"}
            </p>
            ${tipo === "unico" ? `
            <p>
                Valor: ${valor}€
            </p>
            `: `
            <p>
                Frequência de Pagamento: ${freq}
            </p>
            `}
            <p>
                Modo de Pagamento: ${modo === "mbway"? "MBWay": "Transferência Bancária"}
            </p>
        </body>
    </html>
    `
}


export const newVolunteerTemplate = (body: TVolunteerFrom)=>{
    const {
        nome,
        email,
        telefone,
        desc,
        funcao
    } = body

    return `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        </head>
        <body>
            <p>
                <h2>
                    NOVO PEDIDO DE VOLUNTARIADO 
                </h2>    
            </p>
            <p>
                Nome: ${nome}
            </p>
            <p>
                Email: ${email}
            </p>
            <p>
                Telefone: ${telefone}
            </p>
            <p>
                Função: ${funcao}
            </p>
            <p>
                Mensagem: ${desc}
            </p>
        </body>
    </html>
    `
}