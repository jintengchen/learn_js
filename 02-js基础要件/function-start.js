function displayMessage(msgTest, msgType) {
    var html = document.querySelector('html');
    var panel = document.createElement('div');
    panel.setAttribute('class','msgBox');
    html.appendChild(panel);

    var msg = document.createElement('p');
    msg.textContent = msgTest; 
    panel.appendChild(msg);

    var closeBtn = document.createElement('button');
    closeBtn.textContent = 'x';
    panel.appendChild(closeBtn);

    closeBtn.onclick = function() {
        panel.parentNode.removeChild(panel);
    };

    if (msgType === 'warning') {
        msg.style.backgroundImage = 'url(icons/warning.png)';
        panel.style.backgroundColor = 'red';
    } else if (msgType === 'chat') {
        msg.style.backgroundImage = 'url(icons/chat.png)';
        panel.style.backgroundColor = 'aqua';
    } else {
        msg.style.paddingLeft = '20px';
    }
}
    var btn = document.querySelector('button');
    btn.onclick = function() {
        displayMessage('Woo, this is a different message!','warning');
    };