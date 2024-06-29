const User = require('../models/user');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const { setUser } = require('../service/auth');

const handleCreateUser = async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).send('All fields are required');
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).send('User already exists');
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    await User.create({ username, email, password: hashedPassword });
    return res.status(201).redirect('/');
}

const handleLogin = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).send('All fields are required');
    }
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).send('User does not exist');
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        return res.status(400).render('login', { error: 'Incorrect password' });
    }
    const sessionId = uuidv4();
    setUser(sessionId, user);
    res.cookie('sessionId', sessionId);
    return res.status(200).redirect('/');
}


module.exports = { handleCreateUser , handleLogin}