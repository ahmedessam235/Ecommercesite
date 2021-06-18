import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";

@Index("loginid_pkey", ["loginId"], { unique: true })
@Entity("logins", { schema: "public" })
export class Logins {
  @PrimaryGeneratedColumn({ type: "integer", name: "loginID" })
  loginId: number;

  @Column("character varying", { name: "password", length: 255 })
  password: string;

  @ManyToOne(() => Users, (users) => users.logins)
  @JoinColumn([{ name: "userID", referencedColumnName: "userid" }])
  user: Users;
}
