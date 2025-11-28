import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import mongoose from 'mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    mongoose.connection.on('connected', () => {
      console.log('🟢 MongoDB Connected Successfully');
    });

    mongoose.connection.on('error', (err) => {
      console.log('🔴 MongoDB Connection Error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('🟡 MongoDB Disconnected');
    });

    return {
      uri: process.env.MONGO_URI,
    };
  }
}
