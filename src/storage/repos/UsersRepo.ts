import {Categories} from '../../models/entities/Categories';
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { Database } from '../database';
import { Users } from '../../../src/models/entities/Users';

interface IUsersRepo{
    getUserByEmail(email:string):Promise<Users>
    getUsers():Promise<Users[]>
    setUser(CategoryName:string,UserIsAdmin:boolean):Promise<number>
    updateUser(ID:number,UserEmail: string,UserIsAdmin:boolean):Promise<number>
    deleteUser(ID:number):Promise<number>
   
}
export  class UsersRepo implements IUsersRepo {
    public static instance: UsersRepo = new UsersRepo();
    private UsersRepo() { };
    async  getUserByEmail(email:string): Promise<Users> {
      let result:Users;
      result = await  Database.instance.connection.getRepository(Users).findOne({
        userEmail:email
      });     
      return result;
   }
  async  getUsers(): Promise<Users[]> {
       let result:Users[];
       result = await  Database.instance.connection.getRepository(Users).find({});
       return result;
    }

   async setUser(UserEmail: string,UserIsAdmin:boolean): Promise<number>  {
        let result:number ;
        let user:Users;
        user = new Users();
        user.userEmail=UserEmail;
        user.isadmin = UserIsAdmin
        user = await  Database.instance.connection.getRepository(Users).save(user);
        result = user.userid; 
        return result;
    }
  async  updateUser(ID: number, UserEmail: string,UserIsAdmin:boolean):  Promise<number> {
        let result:number ;
        let updatedResult:UpdateResult;
        updatedResult= await  Database.instance.connection.getRepository(Users).update(ID,{userEmail:UserEmail,isadmin:UserIsAdmin});
        result = updatedResult.affected; 
        return result;
    }
  async deleteUser(ID: number): Promise<number> {
        let result:DeleteResult ;
        result= await  Database.instance.connection.getRepository(Users).delete(ID);  
         return result.affected;
    }


    
}