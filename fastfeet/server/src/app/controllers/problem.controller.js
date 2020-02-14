import Problem from "../models/Problems";
import * as Yup from "yup";
import Order from "../models/Order";

class ProblemController {
  async store(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
      severity: Yup.number().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: "Descript issue" });
    }
    const order = await Order.findByPk(req.params.id);
    if (!order) return res.json({ error: "order not found" });
    if (!order.start_date) return res.json({ error: "order not picked up" });
    const { description, severity } = req.body;

    const problem = await Problem.create({
      description,
      order_id: req.params.id,
      severity
    });
    return res.json(problem);
  }
}

export default new ProblemController();
