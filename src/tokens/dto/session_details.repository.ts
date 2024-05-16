import { DataSource, Repository } from "typeorm";
import { session_details } from "./session_details.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class sessionDetailsRepository extends Repository<session_details>{
    constructor(private dataSource: DataSource) {
        super(session_details, dataSource.createEntityManager());
      }
}