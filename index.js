const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors')

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

// Example: If you want to serve the main page manually
// Frontend: 
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// ini untuk backend:
app.get('/chat', (req, res) => {
	res.json({data: "pesan"})
});
app.get('/ping', (req, res) => {
	res.json({data: "pong"})
});
app.get('/text', (req, res) => {
	res.send("text")
});

app.post('/tambah', (req, res) => {
	// GET /search?keyword=book&page=2
	// GET /tambah?num1=1&num2=10
	console.log(req.query) // query
	console.log(req.params) // query

	const hasil = parseFloat(req.query.num1) + parseFloat(req.query.num2);
	res.json({hasil: hasil})
});

 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
