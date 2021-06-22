import {Subcategories} from '../../models/entities/Subcategories';
import { Database } from '../database';

interface ISubcategoriesRepo{
    getSubcategories(categoryId:number):Promise<Subcategories[]>
}
export  class SubcategoriesRepo implements ISubcategoriesRepo {
public static instance: SubcategoriesRepo = new SubcategoriesRepo();
private SubcategoriesRepo() { };

  async  getSubcategories(categoryId:number): Promise<Subcategories[]> {
       let result:Subcategories[];
       result = await  Database.instance.connection.getRepository(Subcategories).find({
           categoryID: categoryId
       });
       return result;
    }
    
}