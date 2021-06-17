import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";

  @Entity("categories", { schema: "public" })

  export class category  {
  @PrimaryGeneratedColumn({ type: "bigint", name: "categoryID" })
   ID:number;
   @Column("character varying", {
    name: "name",
    length: 255,
  })
   name:string;
  }
