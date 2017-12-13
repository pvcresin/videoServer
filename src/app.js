import fs from 'fs'
import express from 'express'
import multer from 'multer'
import moment from 'moment'

moment.locale('ja')

const app = express()
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'videos')
    },
    filename: (req, file, cb) => {
        const time = moment().format('YYYY-MM-DD-HH-mm-ss')
        cb(null, time + '-' + file.originalname)
    }
})
const upload = multer({ storage: storage })

app
    .use(express.static('public'))
    .get('/', (req, res, next) => {
        res.send("Hello")
    })
    .post('/upload', upload.single('video'), (req, res) => {
        res.send('Success')
    })
    .get('/list', (req, res, next) => {
        fs.readdir('videos', (err, files) => {
            if (err) throw err
            res.json(files)
        })
    })
    .listen(3000, () => {
        console.log("URL -> http://localhost:3000")
    })