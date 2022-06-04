import { Request, Response } from "express";
import { prisma } from "../database/prismaClient";

export class CategoryController {
   async createCategory(request: Request, response: Response) {
      const { name } = request.body;

      const category = await prisma.category.create({
         data: {
            name
         }
      })

      return response.status(201).json(category)
   }

   async findAll(request: Request, response: Response) {
      const categories = await prisma.category.findMany();
      return response.json(categories);
   }
}