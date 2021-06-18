import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Orderitems } from "./Orderitems";
import { Users } from "./Users";

@Index("order_pkey", ["orderId"], { unique: true })
@Entity("orders", { schema: "public" })
export class Orders {
  @PrimaryGeneratedColumn({ type: "bigint", name: "orderID" })
  orderId: string;

  @Column("bigint", { name: "totalprice" })
  totalprice: string;

  @OneToMany(() => Orderitems, (orderitems) => orderitems.order)
  orderitems: Orderitems[];

  @ManyToOne(() => Users, (users) => users.orders)
  @JoinColumn([{ name: "userid", referencedColumnName: "userid" }])
  user: Users;
}
