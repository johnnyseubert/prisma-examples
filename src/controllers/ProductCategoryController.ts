import { Request, Response } from "express";
import { prisma } from "../database/prismaClient";

export class ProductCategoryController {
   async createProductCategory(request: Request, response: Response) {

      const { id_category, id_product } = request.body;

      const productCategory = await prisma.productCategory.create({
         data: {
            id_product,
            id_category
         }
      })

      return response.status(201).json(productCategory)
   }
}