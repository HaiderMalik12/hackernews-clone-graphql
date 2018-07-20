function user(root, args, ctx, info) {
    return ctx.db.query.user({ where: { id: root.user.id } }, info)
}
module.exports = {
    user
}