import { Request, Response } from "express";
import { prisma } from "../database/prismaClient";

export class ProductWithExistCategory {
   async handle(request: Request, response: Response) {

      const { name, price, bar_code, id_category } = request.body

      const product = await prisma.productCategory.create({
         data: {
            product: {
               create: {
                  name,
                  bar_code,
                  price
               }
            },
            category: {
               connect: {
                  id: id_category
               }
            }
         }
      })

      return response.json(product);
   }
}