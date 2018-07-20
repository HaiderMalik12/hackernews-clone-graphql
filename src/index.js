const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')
require('dotenv').config()
const resolvers = require('./resolvers');

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql', // the auto-generated GraphQL schema of the Prisma API
      endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma API
      debug: true, // log all GraphQL queries & mutations sent to the Prisma API
      // secret: 'mysecret123', // only needed if specified in `database/prisma.yml`
    }),
  }),
})

server.start(() => console.log('Server is running on http://localhost:4000'))
