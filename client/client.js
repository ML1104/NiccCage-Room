const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('error', function(message) {
	console.log('Wow guy, there was an error.');
	console.log('Heres the message:', message);
});

socket.addEventListener('open', function(message) {
	console.log('Open now!!');
	console.log('Heres the message:', message);
	
});

socket.addEventListener('close', function(message) {
	console.log('Socket is closed now.');
	console.log('Heres the message:', message);
});

socket.addEventListener('message', function(message) {
    let result = JSON.parse(message.data);
    setPosition(result);
});

window.addEventListener('click', function(event) {
    let nick = document.getElementById('nick');

    nick.style.top = event.clientY + 'px';
    nick.style.left = event.clientX + 'px';

    let coordinates = {
        'nick.style.top': event.clientY + 'px',
        'nick.style.left': event.clientX + 'px'
    }

    socket.send(JSON.stringify(coordinates));

});

function setPosition(data) {
    let nick = document.getElementById('nick');
    nick.style.top = data['nick.style.top'];
    nick.style.left = data['nick.style.left'];
}