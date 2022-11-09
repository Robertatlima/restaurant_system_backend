import prismaClient from "../../prisma";

interface ItemRequest {
  order_id: string;
  product_id: string;
  amount: number;
}

class AddItemService {
  async execute({ amount, order_id, product_id }: ItemRequest) {
    const item = await prismaClient.item.create({
      data: {
        order_id: order_id,
        product_id: product_id,
        amount,
      },
    });

    return item;
  }
}

export { AddItemService };
