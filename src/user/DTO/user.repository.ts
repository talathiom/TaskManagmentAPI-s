import { ConflictException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { user } from "./user.entity";
import { authCredentialsDTO } from "./auth-credentials.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class userRepository extends Repository<user>{
    constructor(private dataSource: DataSource) {
        super(user, dataSource.createEntityManager());
      }
    
    async createUser(authCredentialsDTO:authCredentialsDTO):Promise<void>{
      const { username , password} = authCredentialsDTO;
      try{
        
        const salt = await bcrypt.genSalt();
        const hashedPwd =await bcrypt.hash(password,salt);
        
        const userObj = this.create({username,password:hashedPwd});
        await this.save(userObj);
      }
      catch(error){
        if(error.code==='23505'){ //duplicate key error code for postgres
        throw new ConflictException('User name already exist')
      }else{
        throw new InternalServerErrorException();
      }
    }
  }
}