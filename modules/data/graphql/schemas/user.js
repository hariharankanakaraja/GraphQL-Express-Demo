const graphql = require("graphql");
var _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema,
} = graphql;

const users = [
  { id: 1, name: "test 1", age: 10, email: "abc1@gmail.com" },
  { id: 2, name: "test 2", age: 12, email: "abc2@gmail.com" },
  { id: 3, name: "test 3", age: 14, email: "abc3@gmail.com" },
];

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    email: { type: GraphQLString }
  })
});

const RootUserQuery = new GraphQLObjectType({
  name: 'RootUserQueryType',
  fields: () => ({
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        console.log(args.id);
        console.log(_.find(users, { id: parseInt(args.id) }));
        return _.find(users, { id: parseInt(args.id) });
      }
    }
  })
});

module.exports = new GraphQLSchema({
  query: RootUserQuery
});
