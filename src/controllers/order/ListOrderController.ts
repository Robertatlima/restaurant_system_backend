import { Request, Response } from "express";

import { ListOrderService } from "../../services";

class ListOrderController {
  async handle(req: Request, res: Response) {
    const listOrderService = new ListOrderService();

    const listOrders = await listOrderService.execute();

    return res.json(listOrders);
  }
}

export { ListOrderController };
