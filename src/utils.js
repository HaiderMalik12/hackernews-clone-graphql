const jwt = require('jsonwebtoken');

function getUserId(context) {
    const Authorization = context.request.get('Authorization');
    if (Authorization) {
        const token = Authorization.replace('Bearer ', '') // Authorization: Bearer asdasd
        const { userId } = jwt.verify(token, process.env.APP_SECRET);
        return userId;
    }
    throw new Error('Not authenticated');
}

module.exports = {
    getUserId
}