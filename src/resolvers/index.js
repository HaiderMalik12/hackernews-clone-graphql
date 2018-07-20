const _ = require('lodash');

const PostMutations = require('./mutations/PostMutation');
const LinkMutations = require('./mutations/LinkMutation');
const UserMutations = require('./mutations/UserMutation');

const PostQueries = require('./queries/PostQuery');
const LinkQueries = require('./queries/LinkQuery');

const AuthPayload = require('./AuthPayload');


module.exports = {
    Query: _.merge({}, PostQueries, LinkQueries),
    Mutation: _.merge({}, PostMutations, LinkMutations, UserMutations),
    AuthPayload
};