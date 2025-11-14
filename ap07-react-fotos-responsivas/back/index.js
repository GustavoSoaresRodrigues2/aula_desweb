require('dotenv').config()
const axios = require('axios')
const express = require('express')
const app = express()
const cors = require('cors')
const { PEXELS_KEY } = process.env

app.use(cors())

const port = 4000
app.listen(port, () => console.log(`Back OK, Porta ${port}`))

app.get('/search', async (req, res) => {
    try {
        const pexelsClient = axios.create({
            baseURL: 'https://api.pexels.com/v1/',
            headers: {
                Authorization: PEXELS_KEY
            }
        })
        const { data } = await pexelsClient.get('/search', {
            params: {
                query: req.query.query
            }
        })
        res.status(200).json({photos: data.photos})
    } catch (error) {
        console.log(e)
        res.status(500).end(
        )
    }
})

// curated?page=2&per_page=40