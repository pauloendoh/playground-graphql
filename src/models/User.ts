import { Column } from "typeorm";
import { MyEntityObjectType } from "../utils/decorators/model/MyEntityObjectType";
import { MyFieldColumn } from "../utils/decorators/model/MyFieldColumn";

import { MyDefaultEntity } from "../utils/MyDefaultEntity";

@MyEntityObjectType()
export class User extends MyDefaultEntity {
  constructor() {
    super();

    this.id = "uuid";
    this.username = "";
    this.email = "";
    this.password = "";
    this.createdAt = new Date().toISOString();
    this.updatedAt = new Date().toISOString();
  }

  @MyFieldColumn({}, { unique: true })
  username: string;

  @MyFieldColumn({}, { unique: true })
  email: string;

  @Column()
  password: string;
}
