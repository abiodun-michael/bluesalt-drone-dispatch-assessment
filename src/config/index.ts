import * as path from 'node:path';
import * as dotenv from 'dotenv';

dotenv.config({
  path: path.resolve(process.cwd(), './.env'),
});

export const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  rabbitmq: {
    url: process.env.RABBITMQ_URL,
  },
  redis: {
    url: process.env.REDIS_URL,
  },
  db: {
    url: process.env.DATABASE_URL,
  },
  baseUrl: process.env.BASE_URL,
  frontendUrl: process.env.FRONT_END_BASE_URL,
  jwt: {
    secret: process.env.JWT_SECRET,
    rsaPrivKey: process.env.RSA_PRIVATE_KEY,
    rsaPubKey: process.env.RSA_PUBLIC_KEY,
  },
  verificationUrl: process.env.VERIFICATION_URL,
  mono: {
    url: process.env.MONO_URL,
    key: process.env.MONO_SEC_LOOKUP_KEY,
  },
  session: {
    adminAge: process.env.ADMIN_SESSION_AGE,
    customerAge: process.env.CUSTOMER_SESSION_AGE,
  },
};
