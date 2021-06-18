import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Products } from "./Products";
import { Categories } from "./Categories";

@Index("subcategories_name_key", ["name"], { unique: true })
@Index("subcategory_pkey", ["subcategoryId"], { unique: true })
@Entity("subcategories", { schema: "public" })
export class Subcategories {
  @PrimaryGeneratedColumn({ type: "bigint", name: "subcategoryID" })
  subcategoryId: string;

  @Column("character varying", { name: "name", unique: true, length: 255 })
  name: string;

  @OneToMany(() => Products, (products) => products.subcategory)
  products: Products[];

  @ManyToOne(() => Categories, (categories) => categories.subcategories)
  @JoinColumn([{ name: "categoryID", referencedColumnName: "categoryId" }])
  category: Categories;
}
