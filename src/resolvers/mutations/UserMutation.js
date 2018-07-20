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
module.exports = {
    signup
}