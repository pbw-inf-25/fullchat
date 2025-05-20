const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(express.json());

// anggaplah db
const chatRooms = {
	general: [],
	tech: [],
};

// Get chat messages for a room
app.get('/chat/:room', (req, res) => {
	const room = req.params.room;
	res.json({ messages: chatRooms[room] || [] });
});

// Post a new message to a room
app.post('/chat/:room', (req, res) => {
	const room = req.params.room; 
	// general

	const { name, message } = req.body;
	// user3, test 2

	if (!chatRooms[room]) return res.status(404).json({ error: 'Room not found' });
	const newMessage = { name, message, time: new Date().toISOString() };
	// newMessage = {name : "user3", "message": "test 2", "time": '2025-05-20T10:27:24.828Z'}
	// chatRooms.general.push()
	chatRooms[room].push(newMessage);

	console.log(chatRooms)

	res.json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
