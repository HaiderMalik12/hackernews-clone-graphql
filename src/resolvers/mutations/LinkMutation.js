const { getUserId } = require('../../utils');
function newLink(parent, { url, description }, ctx, info) {
    const userId = getUserId(ctx);
    return ctx.db.mutation.createLink({
        data: {
            url,
            description,
            postedBy: {
                connect: {
                    id: userId
                }
            }
        }
    }, info)
}
function updateLink(parent, { id, url, description }, ctx, info) {
    const link = {};
    if (url) {
        link.url = url
    }
    if (description) {
        link.description = description
    }
    return ctx.db.mutation.updateLink({
        data: link,
        where: {
            id
        }
    }, info)
}
function deleteLink(parent, { id }, ctx, info) {
    return ctx.db.mutation.deleteLink({ where: { id } }, info)
}

module.exports = {
    newLink,
    updateLink,
    deleteLink
}