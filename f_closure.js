
function sendRequest(){
    var requestID = '123';
    $.ajax({
        url: '/myUrl',
        success:function(response) {
            console.log('Request'+  requestID + 'returned');
        },
        error: function(err){
            console.log("Error message:" + err);
        }
    });
}

sendRequest();
