import { Request, Response } from "express";

import { FinishOrderService } from "../../services";

class FinishOrderController {
  async handle(req: Request, res: Response) {
    const { order_id } = req.body;

    const finishOrderService = new FinishOrderService();

    const finishOrders = await finishOrderService.execute({ order_id });

    return res.json(finishOrders);
  }
}

export { FinishOrderController };
