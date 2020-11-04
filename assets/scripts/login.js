$("#submit").submit(function() {
    var email = $("#inputEmailAddress").val()
    var password = $("#inputPassword").val()
    console.log('username and password', email, password)
    $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        url: 'http://127.0.0.1:8081/play/signIn',
        data: JSON.stringify({email: email, password: password}),
        error: function (e) {
            console.log(e)
        },
        success: function(d) {
            console.log(d.token)
            localStorage.setItem('userToken', d.token)
            window.open("game.html", "_self")
        }
    })
})