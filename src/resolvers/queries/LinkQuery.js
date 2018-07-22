function linksFeed(parent, args, ctx, info) {
    const where = args.filter
        ? {
            OR: [
                { url_contains: args.filter },
                { description_contains: args.filter }
            ]
        }
        : {};
    return ctx.db.query.links({ where }, info)
}
function singleLink(parent, { id }, ctx, info) {
    return ctx.db.query.link({ where: { id } }, info)
}

module.exports = {
    linksFeed,
    singleLink
}