import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Orders } from "./Orders";
import { Products } from "./Products";

@Index("orderitem_pkey", ["orderitemId"], { unique: true })
@Entity("orderitems", { schema: "public" })
export class Orderitems {
  @PrimaryGeneratedColumn({ type: "bigint", name: "orderitemID" })
  orderitemId: string;

  @Column("bigint", { name: "quantity" })
  quantity: string;

  @Column("bigint", { name: "itemprice", nullable: true })
  itemprice: string | null;

  @ManyToOne(() => Orders, (orders) => orders.orderitems)
  @JoinColumn([{ name: "orderid", referencedColumnName: "orderId" }])
  order: Orders;

  @ManyToOne(() => Products, (products) => products.orderitems)
  @JoinColumn([{ name: "productid", referencedColumnName: "productId" }])
  product: Products;
}
