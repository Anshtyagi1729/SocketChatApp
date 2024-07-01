const socket = io(); // Initialize a new Socket.io client and connect to the server

// Add an event listener to the send button
document.getElementById('send-button').addEventListener('click', () => {
    const message = document.getElementById('message-input').value; // Get the message from the input field
    socket.emit('chat message', message); // Emit the message to the server
    document.getElementById('message-input').value = ''; // Clear the input field
});

// Listen for chat messages from the server
socket.on('chat message', (msg) => {
    const messages = document.getElementById('messages'); // Get the messages div
    const messageElement = document.createElement('div'); // Create a new div for the message
    messageElement.textContent = msg; // Set the text content to the message
    messages.appendChild(messageElement); // Append the message div to the messages div
});
