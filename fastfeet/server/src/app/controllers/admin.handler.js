import * as Yup from "yup";
import Recipient from "../models/Recipient";

class RecipientController {
  // recipient creation
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.string().required(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      zip: Yup.number()
    });

    if (!(await schema.isValid(req.body))) {
      return res.json({ error: "Please check your values and try again" });
    }

    const alreadyExist = await Recipient.findOne({
      where: { number: req.body.number }
    });
    if (alreadyExist) res.json({ error: "you already have this user" });

    const recipient = await Recipient.create(req.body);
    return res.status(200).json(recipient);
  }
}

export default new RecipientController();
