const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 25565;

app.use(cors());
app.use(express.json());

app.post('/open-port', (req, res) => {
    // Here you can perform actions when the button is clicked.
    // NOTE: You can't actually 'open' a port through this method,
    // but you might trigger some functionality or log the event.
    console.log('Button clicked! Port action triggered.');

    // Respond back to the client.
    res.json({ message: 'Port action triggered!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});