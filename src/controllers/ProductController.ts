import { Request, Response } from "express";
import { prisma } from "../database/prismaClient";

export class ProductController {
   async createProduct(request: Request, response: Response) {

      const { name, bar_code, price } = request.body

      const product = await prisma.product.create({
         data: {
            name,
            bar_code,
            price
         }
      });

      return response.json(product);
   }

   async findAll(request: Request, response: Response) {
      const products = await prisma.product.findMany();
      return response.json(products);
   }
}