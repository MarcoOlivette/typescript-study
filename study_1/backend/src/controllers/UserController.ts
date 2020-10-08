import { Response, Request } from "express";
import EmailService from "../services/EmailService";

const users = [
  {
    id: 1,
    name: "name",
  },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },
  async create(req: Request, res: Response) {
    const emailService = new EmailService();
    const ret = emailService.sendMail({
      to: { name: "Marco", email: "Marco Aurelio" },
      message: { subject: "Titulo", body: "muitas coisas escritas" },
    });
    return res.json(ret);
  },
};
