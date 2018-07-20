const _ = require('lodash');

const PostMutations = require('./mutations/PostMutation');
const LinkMutations = require('./mutations/LinkMutation');

const PostQueries = require('./queries/PostQuery');
const LinkQueries = require('./queries/LinkQuery');


module.exports = {
    Query: _.merge({}, PostQueries, LinkQueries),
    Mutation: _.merge({}, PostMutations, LinkMutations)
};