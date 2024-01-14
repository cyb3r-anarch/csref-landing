const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors())
const PORT = 5000
require('dotenv').config()
const client = require("@mailchimp/mailchimp_marketing");

client.setConfig({
    apiKey: process.env.API_KEY,
    server: process.env.SERVER_PREFIX,
});

app.use(express.json())

app.post("/addToList", async (req, res) => {
    try {
        const response = await client.lists.addListMember(process.env.LIST_ID, {
            email_address: req.body.email,
            status: "subscribed",
        });
        res.json({ message: "Success!", data: response });
        } 
    catch (error) {
        console.error("Mailchimp Error:", error);
        res.status(500).json({ message: "Failed", error: error.toString() });
    }
})

app.listen(PORT || process.env.PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});