const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection (as per your report specs)
mongoose.connect('mongodb://127.0.0.1:27017/portfolioDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Schema for Contact Form
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});
const Contact = mongoose.model('Contact', contactSchema);

// API Route
app.post('/api/contact', async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(200).send({ message: "Message sent successfully!" });
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));