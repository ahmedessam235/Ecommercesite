import {Categories} from '../../models/entities/Categories';
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { Database } from '../database';
import { Tags } from '../../models/entities/Tags';

interface ITagsRepo{
    getTags():Promise<Tags[]>
    setTag(CategoryName:string):Promise<number>
    updateTag(ID:number,UpdatedName:string):Promise<number>
    deleteTag(ID:number):Promise<number>
}
export  class TagsRepo implements ITagsRepo {
    public static instance: TagsRepo = new TagsRepo();
    private TagsRepo() { };

  async  getTags(): Promise<Tags[]> {
       let result:Tags[];
       result = await  Database.instance.connection.getRepository(Tags).find({});
       return result;
    }
   async setTag(TagName: string): Promise<number>  {
        let result:number ;
        let tag:Tags;
        tag = new Tags();
        tag.name=TagName;
        tag = await  Database.instance.connection.getRepository(Tags).save(tag);
        result = tag.tagId; 
        return result;
    }
  async  updateTag(ID: number, UpdatedTag: string):  Promise<number> {
        let result:number ;
        let updatedResult:UpdateResult;
        updatedResult= await  Database.instance.connection.getRepository(Tags).update(ID,{name:UpdatedTag});
        result = updatedResult.affected; 
        return result;
    }
  async deleteTag(ID: number): Promise<number> {
        let result:DeleteResult ;
        result= await  Database.instance.connection.getRepository(Tags).delete(ID);  
         return result.affected;
    }


    
}