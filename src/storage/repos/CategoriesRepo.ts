import {Categories} from '../../models/entities/Categories';
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { Database } from '../database';

interface ICategoriesRepo{
    getCategories():Promise<Categories[]>
    setCategory(CategoryName:string):Promise<number>
    updateCategory(ID:number,UpdatedName:string):Promise<number>
    deleteCategory(ID:number):Promise<number>
}
export  class CategoriesRepo implements ICategoriesRepo {
    public static instance: CategoriesRepo = new CategoriesRepo();
    private CategoriesRepo() { };

  async  getCategories(): Promise<Categories[]> {
       let result:Categories[];
       result = await  Database.instance.connection.getRepository(Categories).find({});
       return result;
    }
   async setCategory(CategoryName: string): Promise<number>  {
        let result:number ;
        let category:Categories;
        category = new Categories();
        category.name=CategoryName;
        category = await  Database.instance.connection.getRepository(Categories).save(category);
        result = category.categoryId; 
        return result;
    }
  async  updateCategory(ID: number, UpdatedName: string):  Promise<number> {
        let result:number ;
        let updatedResult:UpdateResult;
        updatedResult= await  Database.instance.connection.getRepository(Categories).update(ID,{name:UpdatedName});
        result = updatedResult.affected; 
        return result;
    }
  async deleteCategory(ID: number): Promise<number> {
        let result:DeleteResult ;
        result= await  Database.instance.connection.getRepository(Categories).delete(ID);  
         return result.affected;
    }


    
}