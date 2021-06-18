import {Categories} from '../../models/entities/Categories';
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { Database } from '../database';
import { Orderitems } from '../../../src/models/entities/Orderitems';

interface IOrderItemsRepo{
    getOrders():Promise<Orderitems[]>
    setOrders(OrderQuanitiy:string,itemprice: string) :Promise<number>
    updateOrders(ID:number,UpdatedName:string):Promise<number>
    deleteOrders(ID:number):Promise<number>
}
export  class OrderItemsRepo implements IOrderItemsRepo {
    public static instance: OrderItemsRepo = new OrderItemsRepo();
    private OrderItemsRepo() { };

  async  getOrders(): Promise<Orderitems[]> {
       let result:Orderitems[];
       result = await  Database.instance.connection.getRepository(Orderitems).find({});
       return result;
    }
   async setOrders(OrderName: string,itemprice: string): Promise<number>  {
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
        result= await  Database.instance.connection.getRepository(Orderitems).delete(ID);  
         return result.affected;
    }


    
}