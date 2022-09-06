const PORT = 8000
const express = require("express")
const { MongoClient } = require("mongodb")
const cors = require("cors")
require("dotenv").config()

const uri = process.env.URI
const emailUser = process.env.EMAIL_USER
const emailPass = process.env.EMAIL_PASS

const app = express()
app.use(cors())
app.use(express.json())

const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: emailUser,
    pass: emailPass,
  },
})

app.get("/", (req, res) => {
  res.json("Hello conenxtus")
})

app.get("/user/:userName", async (req, res) => {
  const client = new MongoClient(uri)
  const { userName } = req.params

  try {
    await client.connect()
    const database = client.db("connextus")
    const users = database.collection("users")

    const user = await users.findOne({ user_name: userName })
    res.status(200).json({ user })
  } catch (error) {
    console.log(error)
  } finally {
    await client.close()
  }
})

app.get("/users", async (req, res) => {
  const client = new MongoClient(uri)

  try {
    await client.connect()
    const database = client.db("connextus")
    const users = database.collection("users")

    const response = await users.find().toArray()
    res.send(response)
  } finally {
    await client.close()
  }
})

app.post("/meeting", async (req, res) => {
  const client = new MongoClient(uri)
  const {
    user_name,
    phone_number,
    email,
    date,
    user_id,
    prof_firstname,
    prof_email,
  } = req.body

  try {
    await client.connect()
    const database = client.db("connextus")
    const meetings = database.collection("meetings")

    const cleanEmail = email.toLowerCase()
    const now = new Date()
    const formatted = now.toISOString() //RFC 3339 format
    const data = {
      from_user_name: user_name,
      to_user_id: user_id,
      phone_number: phone_number,
      email: cleanEmail,
      date: date,
      timestamp: formatted
    }

    const newMeeting = await meetings.insertOne(data)
    /* email - professional */
    const emailSubject = user_name + "is trying to contact you!"
    const emailContent =
        "<p>Dear " +
        prof_firstname +
        ",</p><br><br><p>" +
        user_name +
        " is trying to contact you for a meeting the " +
        date + "</p><br><br><p>" +
        "Here you have the email: " +
        cleanEmail + '</p>'

    const profMailOptions = {
        from: 'corp.official@gmail.com',
        to: prof_email,
        subject: emailSubject,
        html: emailContent
    }

    transporter.sendMail(profMailOptions, function(error, info) {
        if(error){
            console.log(error)
        }else{
            console.log("email sent: " + info.response)
            console.log(info)
        }
    })

    /* email - guest user */
    const guestSubject = "Contact notification"
    const guestContent =
        "<p>Dear " +
        user_name +
        ",</p><br><br><p>" +
        " We have notified " +
        prof_firstname +
        " that you want to contact him"

    const guestMailOptions = {
        from: 'corp.official@gmail.com',
        to: cleanEmail,
        subject: guestSubject,
        html: guestContent
    }

    transporter.sendMail(guestMailOptions, function(error, info) {
        if(error){
            console.log(error)
        }else{
            console.log("email sent: " + info.response)
            console.log(info)
        }
    })
      
    res.status(201).json({ meetingId: newMeeting })
  } catch (error) {
    console.log(error)
  }
})

app.post("/referral", async (req, res) => {
  const client = new MongoClient(uri)
  const {
    referral_name,
    referral_email,
    email,
    user_id,
    prof_firstname,
    prof_email
} = req.body

  try {
    await client.connect()
    const database = client.db("connextus")
    const referrals = database.collection("referrals")

    const cleanEmail = email.toLowerCase()
    const now = new Date()
    const formatted = now.toISOString() //RFC 3339 format
    const data = {
      email: cleanEmail,
      timestamp: formatted,
      referral_name: referral_name,
      referral_email: referral_email,
      to_user_id: user_id,
    }

    const referral = await referrals.insertOne(data)

    /* Referral mail */
    const referralSubject = "Referral subject!"
    const referralContent =
        "<p>Dear " +
        referral_name +
        ",</p><br><p>" +
        cleanEmail +
        " refers you to " +
        prof_firstname + "</p><br><p>" +
        "Here you have the email: " +
        prof_email + '</p>'

    const referralEmailOptions = {
        from: 'corp.official@gmail.com',
        to: referral_email,
        subject: referralSubject,
        html: referralContent
    }

    transporter.sendMail(referralEmailOptions, function(error, info) {
        if(error){
            console.log(error)
        }else{
            console.log("email sent: " + info.response)
            console.log(info)
        }
    })

    /* Prof mail */
    const emailSubject = "Referral subject for prof!"
    const emailContent =
        "<p>Dear " +
        prof_firstname +
        ",</p><br><p>" +
        cleanEmail +
        " refers you to " +
        referral_name + "</p><br><p>" +
        "Here you have the email: " +
        referral_email + '</p>'

    const profEmailOptions = {
        from: 'corp.official@gmail.com',
        to: prof_email,
        subject: emailSubject,
        html: emailContent
    }

    transporter.sendMail(profEmailOptions, function(error, info) {
        if(error){
            console.log(error)
        }else{
            console.log("email sent: " + info.response)
            console.log(info)
        }
    })

    res.status(201).json({ referral: referral })
  } catch (error) {
    console.log(error)
  }
})

app.listen(PORT, () => console.log("server runnig on PORT " + PORT))
