const PORT = 8000
const express = require('express')
const { MongoClient } = require('mongodb')
const cors = require('cors')

const uri = "mongodb+srv://connextus_adm:aRmFzpvylHDXvRC1@cluster0.u9liseb.mongodb.net/Cluster0?retryWrites=true&w=majority"

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json("Hello conenxtus")
})

app.get('/users', async(req, res) => {
    const client = new MongoClient(uri)

    try {
        await client.connect()
        const database = client.db('connextus')
        const users = database.collection('users')

        const response = await users.find().toArray()
        res.send(response)
        
    } finally {
        await client.close();
    }
})

app.post('/meeting', async(req, res) => {
    const client = new MongoClient(uri)
    const {user_name, phone_number, email, date, user_id} = req.body

    try {
        await client.connect()
        const database = client.db('connextus')
        const meetings = database.collection('meetings')

        const cleanEmail = email.toLowerCase();
        const now = new Date();
        const formatted = now.toISOString(); //RFC 3339 format
        const data = {
            from_user_name: user_name,
            to_user_id: user_id,
            phone_number: phone_number,
            email: cleanEmail,
            date: date,
            timestamp: formatted
        }

        const newMeeting = await meetings.insertOne(data)

        res.status(201).json({ meetingId: newMeeting })
    } catch (error) {
        console.log(error);
    }
})

app.post('/referral', async(req, res) => {
    const client = new MongoClient(uri)
    const {referral_name, referral_email, email, user_id} = req.body

    try {
        await client.connect()
        const database = client.db('connextus')
        const meetings = database.collection('referrals')

        const cleanEmail = email.toLowerCase();
        const now = new Date();
        const formatted = now.toISOString(); //RFC 3339 format
        const data = {
            email: cleanEmail,
            timestamp: formatted,
            referral_name: referral_name,
            referral_email: referral_email,
            to_user_id: user_id
        }

        const referral = await meetings.insertOne(data)

        res.status(201).json({ referral: referral })
    } catch (error) {
        console.log(error);
    }
})

app.post('/message', (req, res) => {
    res.json("Hello conenxtus")
})

app.get('/message', (req, res) => {
    res.json("Hello conenxtus")
})


app.listen(PORT, () => console.log("server runnig on PORT " + PORT))
