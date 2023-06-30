const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {User} = require("./models/User");
const info = require("/Users/yeon.ari/Documents/likelion/아기멋사 발표회 10팀 코드/frontend/")

const app = express();
const port = 3000;

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/get-started.html', (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user) {
            return res.json({
                loginSuccess: false,
                message: "사용자를 찾을 수 없습니다."
            })
        }
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch)
                return res.json({
                    loginSuccess: false,
                    message: "비밀번호가 틀렸습니다."
                })
            user.generateToken((err, user) => {

            })
        })
    })
})

app.listen(3000, function () {
    console.log(`listening on port ${port}`)
})