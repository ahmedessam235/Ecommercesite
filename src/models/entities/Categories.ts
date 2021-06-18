import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Subcategories } from "./Subcategories";

@Index("categories_pkey", ["categoryId"], { unique: true })
@Entity("categories", { schema: "public" })
export class Categories {
  @PrimaryGeneratedColumn({ type: "bigint", name: "categoryID" })
  categoryId: number;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @OneToMany(() => Subcategories, (subcategories) => subcategories.category)
  subcategories: Subcategories[];
}
