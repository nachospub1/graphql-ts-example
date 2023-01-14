import dotenv from 'dotenv';

dotenv.config();
const {ENVIRONMENT, PORT} = process.env;
const env = {
  ENVIRONMENT: ENVIRONMENT || 'development',
  PORT: Number(PORT) || 4000
};

export default env;