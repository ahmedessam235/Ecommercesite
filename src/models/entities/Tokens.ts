import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";

@Index("token_pkey", ["userId"], { unique: true })
@Entity("tokens", { schema: "public" })
export class Tokens {
  @PrimaryGeneratedColumn({ type: "integer", name: "tokenID" })
  tokenId: number;

  @Column("character varying", { name: "token", length: 255 })
  token: string;

  @Column("bigint", { name: "userID" })
  userId: number;

  @OneToOne(() => Users, (users) => users.tokens)
  @JoinColumn([{ name: "userID", referencedColumnName: "userid" }])
  user: Users;
}
