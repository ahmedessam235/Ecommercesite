import {Categories} from '../../models/entities/Categories';
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { Database } from '../database';
import { Orders } from '../../../src/models/entities/Orders';

interface IOrdersRepo{
    getOrders():Promise<Orders[]>
    setOrders(OrderName:string):Promise<number>
    updateOrders(ID:number,UpdatedName:string):Promise<number>
    deleteOrders(ID:number):Promise<number>
}
export  class OrdersRepo implements IOrdersRepo {
    public static instance: OrdersRepo = new OrdersRepo();
    private OrdersRepo() { };

  async  getOrders(): Promise<Orders[]> {
       let result:Orders[];
       result = await  Database.instance.connection.getRepository(Orders).find({});
       return result;
    }
   async setOrders(OrderName: string): Promise<number>  {
        let result:number ;
        // let category:Categories;      /* To DO how to get the value of order price */
        // category = new Categories();
        // category.name=CategoryName;
        // category = await  Database.instance.connection.getRepository(Categories).save(category);
        // result = category.categoryId; 
        return result;
    }
  async  updateOrders(ID: number, UpdatedName: string):  Promise<number> {
        let result:number ;
        // let updatedResult:UpdateResult;
        // updatedResult= await  Database.instance.connection.getRepository(Categories).update(ID,{name:UpdatedName});
        // result = updatedResult.affected; 
        return result;
    }
  async deleteOrders(ID: number): Promise<number> {
        let result:DeleteResult ;
        result= await  Database.instance.connection.getRepository(Orders).delete(ID);  
         return result.affected;
    }


    
}