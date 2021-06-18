import {
  Column,
  Entity,
  Index,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Products } from "./Products";

@Index("tag_pkey", ["tagId"], { unique: true })
@Entity("tags", { schema: "public" })
export class Tags {
  @PrimaryGeneratedColumn({ type: "bigint", name: "tagID" })
  tagId: number;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @ManyToMany(() => Products, (products) => products.tags)
  products: Products[];
}
