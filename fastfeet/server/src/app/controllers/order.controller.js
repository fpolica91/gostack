import Order from "../models/Order";
import Recipient from "../models/Recipient";
import * as Yup from "yup";
import Courier from "../models/Courier";
import User from "../models/User";
import Mail from "../../lib/Mail";
import Problem from "../models/Problems";

class OrderController {
  async index(req, res) {
    const admin = await User.findByPk(req.userId);
    if (!admin) {
      return res.status(401).json({ error: "Permission Denied" });
    }
    const orders = await Order.findAll({
      where: { cancelled_at: null }
    });

    return res.json(orders);
  }

  async store(req, res) {
    // check user is admin
    const admin = await User.findByPk(req.userId);
    if (!admin) {
      return res.status(401).json({ error: "Permission Denied" });
    }
    // check values are correct
    const schema = Yup.object().shape({
      product: Yup.string().required(),
      courier_id: Yup.number().required(),
      recipient_id: Yup.number().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: "check fileds" });
    }
    const { courier_id, recipient_id, product } = req.body;

    const courier = await Courier.findByPk(courier_id);
    const recipient = await Recipient.findByPk(recipient_id);
    if (!courier) return res.json({ error: "verify courier id" });
    if (!recipient) return res.json({ error: "verify recipient id" });

    const order = await Order.create({
      courier_id,
      recipient_id,
      product
    });

    await Mail.sendMail({
      to: `${courier.name} <${courier.email}>`,
      subject: "New Order Assigned",
      template: "confirmation",
      context: {
        courier: courier.name,
        recipient: recipient.name,
        product: product,
        date: new Date()
      }
    });

    return res.json({
      recipient_id,
      courier_id,
      product
    });
  }
  async delete(req, res) {
    const { id } = req.params;
    const problem = await Problem.findByPk(id, {
      include: [
        {
          model: Order,
          as: "order",
          attributes: ["id", "courier_id"]
        }
      ]
    });

    const courier = await Courier.findByPk(problem.order.courier_id);
    const order = await Order.findByPk(problem.order_id);
    await problem.destroy();
    await order.destroy();

    await Mail.sendMail({
      to: `${courier.name} <${courier.email}>`,
      subject: "Cancelled Order By Admin",
      template: "cancellation",
      context: {
        courier: courier.name,
        id: problem.order_id,
        date: new Date()
      }
    });

    return res.json({ success: "order was succesfully deleted" });
  }
}

export default new OrderController();
