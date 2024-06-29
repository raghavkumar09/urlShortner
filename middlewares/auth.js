const { getUser } = require('../service/auth');

const restrictLoginUser = (req, res, next) => {
    const sessionId = req.cookies.sessionId;
    if (!sessionId) {
        return res.redirect('/login');
    }
    const user = getUser(sessionId);
    if (!user) {
        return res.redirect('/login');
    }
    req.user = user;
    next();
}

/**
 * Middleware function to retrieve the user associated with the current session from cookies.
 * @param {object} req - The request object containing client request data.
 * @param {object} res - The response object used to send a response back to the client.
 * @param {function} next - The next middleware function in the stack.
 */
const checkAuth = (req, res, next) => {
    const sessionId = req.cookies.sessionId;
    const user = getUser(sessionId);   
    req.user = user;
    next();
}


module.exports = { restrictLoginUser , checkAuth }