import { Request, Response } from "express";
import { prisma } from "../database/prismaClient";

export class FindProductController {
   async findProduct(request: Request, response: Response) {
      const { id } = request.params;

      const product = await prisma.product.findFirst({
         where: {
            id: id
         },
         include: {
            ProductCategory: true
         }
      })

      return response.status(200).json(product)
   }
}