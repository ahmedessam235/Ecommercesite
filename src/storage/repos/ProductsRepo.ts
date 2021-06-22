import {Products} from '../../models/entities/Products';
import { Database } from '../database';

interface IProductsRepo{
    getProducts(categoryId:number):Promise<Products[]>
}
export  class ProductsRepo implements IProductsRepo {
public static instance: ProductsRepo = new ProductsRepo();
private ProductsRepo() { };

  async  getProducts(subCategoryId:number): Promise<Products[]> {
       let result:Products[];
       result = await  Database.instance.connection.getRepository(Products).find({
        subcategoryID: subCategoryId
       });
       return result;
    }
    
}