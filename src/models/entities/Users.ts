import {
  Column,
  Entity,
  Index,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Logins } from "./Logins";
import { Orders } from "./Orders";
import { Tokens } from "./Tokens";

@Index("users_pkey", ["userid"], { unique: true })
@Entity("users", { schema: "public" })
export class Users {
  @PrimaryGeneratedColumn({ type: "bigint", name: "userid" })
  userid: number;

  @Column("character varying", { name: "user_email", length: 255 })
  userEmail: string;

  @Column("boolean", { name: "isadmin" })
  isadmin: boolean;

  @OneToMany(() => Logins, (logins) => logins.user)
  logins: Logins[];

  @OneToMany(() => Orders, (orders) => orders.user)
  orders: Orders[];

  @OneToOne(() => Tokens, (tokens) => tokens.user)
  tokens: Tokens;
}
