const shortid = require('shortid');
const Url = require('../models/url');


const handleCreateUrl = async (req, res) => {
    const body = req.body;
    if (!body.longUrl) {
        return res.status(400).send('All fields are required');
    }
    const nanoid = shortid.generate();
    const url = await Url.create({
        longUrl: body.longUrl,
        shortUrl: nanoid,
        views: []
    });
    return res.render('home', { shortUrl: url.shortUrl });
    // res.json({
    //     status: 'success',
    //     shortUrl: url.shortUrl
    // })
}

const handleAnaliticalData = async (req, res) => {
    const shortUrl = req.params.shortUrl;
    const analytics = await Url.findOne({ shortUrl });
    res.json({
        totalClicks: analytics.views.length,
        analytics: analytics.views
    });
}

module.exports = { handleCreateUrl, handleAnaliticalData }