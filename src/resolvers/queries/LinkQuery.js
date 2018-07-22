function linksFeed(parent, { filter, skip, first }, ctx, info) {
    const where = filter
        ? {
            OR: [
                { url_contains: args.filter },
                { description_contains: args.filter }
            ]
        }
        : {};
    return ctx.db.query.links({ where, skip, first }, info)
}
function singleLink(parent, { id }, ctx, info) {
    return ctx.db.query.link({ where: { id } }, info)
}

module.exports = {
    linksFeed,
    singleLink
}