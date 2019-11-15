window.onload = function()
{
    var msgID = document.getElementById('id-display');
    var msgData = document.getElementById('msg-data-display');
    var msgTime = document.getElementById('timestamp');

    var socket = io();
    
    socket.on(
        'can-msg', 
        function(msg)
        {
            msgData.innerHTML = msg;
        }
    )

}