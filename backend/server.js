const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello, Apparel Submission API!');
});

app.post('/submit-apparel', (req, res) => {
    const { apparelType, condition, action } = req.body;
    console.log(`Apparel Type: ${apparelType}, Condition: ${condition}, Action: ${action}`);
    res.send(`Submission received! Apparel Type: ${apparelType}, Condition: ${condition}, Preferred Action: ${action}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
