const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Handle POST requests to '/submit'
app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    // Here you can handle the submitted data as per your requirements, such as storing it in a database
    console.log(`Name: ${name}, Email: ${email}`);
    res.json({ message: 'Form submitted successfully!' }); // Send response to client
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
