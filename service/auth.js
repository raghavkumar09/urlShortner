const sessionToUser = new Map();

const setUser = (id, user) => {
    return sessionToUser.set(id, user);
}

const getUser = (id) => {
    return sessionToUser.get(id);
}

module.exports = { setUser, getUser }