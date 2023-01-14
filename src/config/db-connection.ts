import { Sequelize } from 'sequelize-typescript';
import models from '../db/models/index.js';
import dbConfig from './db-config.json' assert{ type: 'json' };
import env from './env.js';

const config = dbConfig[env.ENVIRONMENT];
export default new Sequelize({ ...config, models });
