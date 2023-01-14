import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './schema/schema.js';
import resolvers from './resolvers/index.js';
import connection from './config/db-connection.js';
import env from './config/env.js';

const {PORT, ENVIRONMENT} = env;

const server = new ApolloServer({
  typeDefs,
  resolvers
});

await connection.sync();

const { url } = await startStandaloneServer(server, { listen: { port: PORT } });
console.log(`🚀  Server on ${ENVIRONMENT}, ready at: ${url}`);
