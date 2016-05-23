/**
 * Created by Jakub on 20. 5. 2016.
 */
function startStream() {
    streamControl('start');
}
function stopStream() {
    streamControl('stop');
}

function showPrompt() {
    address = prompt('Type in IP adress', '192.168.2.9');
    return address;
}
function streamControl(method) {

    if (($('#stream-key').val() != '' && method == 'start') ||( method == 'stop')) {
        var key = $('#stream-key').val();
        var address = showPrompt();
        if (address != null) {
            $.ajax({
                type: 'POST',
                url: '/stream/control',
                success: ajaxCallback,
                data: {address: address, command: method, key: key}
            });
        }
    }
    else {
        alert('Stream key input is empty.')
    }
}
ajaxCallback = function (data) {
    data_decoded = JSON.parse(data);
    console.log(data_decoded);

};