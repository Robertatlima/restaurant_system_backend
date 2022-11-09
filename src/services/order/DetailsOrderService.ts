import prismaClient from "../../prisma";

interface DeitalsResquest {
  order_id: string;
}

class DetailsOrderService {
  async execute({ order_id }: DeitalsResquest) {
    const orders = await prismaClient.item.findMany({
      where: {
        order_id: order_id,
      },
      include: {
        product: true,
        order: true,
      },
    });

    return orders;
  }
}

export { DetailsOrderService };
