import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Orderitems } from "./Orderitems";
import { Subcategories } from "./Subcategories";
import { Tags } from "./Tags";

@Index("products_pkey", ["productId"], { unique: true })
@Entity("products", { schema: "public" })
export class Products {
  @PrimaryGeneratedColumn({ type: "bigint", name: "productID" })
  productId: string;

  @Column("double precision", { name: "price", precision: 53 })
  price: number;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @OneToMany(() => Orderitems, (orderitems) => orderitems.product)
  orderitems: Orderitems[];

  @ManyToOne(() => Subcategories, (subcategories) => subcategories.products)
  @JoinColumn([
    { name: "subcategoryID", referencedColumnName: "subcategoryId" },
  ])
  subcategory: Subcategories;

  @ManyToMany(() => Tags, (tags) => tags.products)
  @JoinTable({
    name: "producttags",
    joinColumns: [{ name: "productID", referencedColumnName: "productId" }],
    inverseJoinColumns: [{ name: "tagID", referencedColumnName: "tagId" }],
    schema: "public",
  })
  tags: Tags[];
}
