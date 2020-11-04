$("#submit").submit(function() {
    var email = $("#inputEmailAddress").val();
    var password = $("#inputPassword").val();

    console.log(`email : ${email}, password: ${password}`);
    $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        url: 'http://127.0.0.1:8081/play/signUp ',
        data: JSON.stringify({email:email, password:password }),
        error: function (e) {
            console.log(e)
        },
        success: function(d) {
            console.log(d)
            window.open("login.html", "_self")
        }
    
    })
})