import { Category } from "./category";

export class Product {

  id!: number;
  productName!: string;
  rate!: number;
  currentQuantity!: number;
  totalQuantity!: number;
  brand!: string;
  categoryId!: number;
  category!: Category;
  status!: number;
}
