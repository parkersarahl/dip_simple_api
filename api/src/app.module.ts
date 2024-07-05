import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from './datasource/typeorm.module';

@Module({
  imports: [TodosModule, ConfigModule.forRoot( {isGlobal:true}), TypeOrmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
