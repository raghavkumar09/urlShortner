const express = require('express');
const urlRouter = require('./router/url');
const staticRouter = require('./router/staticRouter');
const userRouter = require('./router/user');
const cookiesParser = require('cookie-parser');
const { restrictLoginUser , checkAuth} = require('./middlewares/auth');

const mongooseConnection = require('./connection');
const Url = require('./models/url');
const app = express();

const PORT = 3000;
mongooseConnection();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookiesParser());

app.use('/url', restrictLoginUser, urlRouter);
app.use('/user', userRouter);
app.use('/', checkAuth, staticRouter);

app.get('/url/:shortUrl', async(req, res) => {
    const shortUrl = req.params.shortUrl;
    const url = await Url.findOneAndUpdate({ shortUrl }, { $push: { views: { timestamps: Date.now() } } });
    res.redirect(url.longUrl);
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})