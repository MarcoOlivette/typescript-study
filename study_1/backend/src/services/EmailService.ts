interface IMailTo {
  name: String;
  email: String;
}

interface IMailMessage {
  subject: String;
  body: String;
  attachment?: String[];
}

interface IMessageDTO {
  to: IMailTo;
  message: IMailMessage;
}

interface IMailService {
  sendMail(request: IMessageDTO): {};
}

class EmailService implements IMailService {
  sendMail({ to, message }: IMessageDTO) {
    const msg =  {
      message : `email enviado ${to.name} : ${message.subject}` 
    }
    return msg;
  }
}

export default EmailService;
