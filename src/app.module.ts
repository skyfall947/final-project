import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { CandidateModule } from './candidate/candidate.module';
import { environments } from './config/enviroments';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(environments.mongoUri),
    AuthModule,
    CandidateModule,
  ],
})
export class AppModule {}
