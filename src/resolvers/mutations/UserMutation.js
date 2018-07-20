const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
async function signup(parent, { name, email, password }, ctx, info) {
    const encryptedPassword = await bcrypt.hash(password, 10);
    const user = await ctx.db.mutation.createUser({
        data: {
            name,
            email,
            password: encryptedPassword
        }
    }, `{id}`);
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    return {
        token,
        user
    }
}
async function login(parent, { email, password }, ctx, info) {
    const user = await ctx.db.query.user({
        where: {
            email
        }
    }, `{id password}`);
    if (!user) {
        throw new Error('No such a user');
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
        throw new Error('Invalid password');
    }
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    return {
        token,
        user
    }

}
module.exports = {
    signup,
    login
}