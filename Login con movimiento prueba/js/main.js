

$('.message a').click(function () {
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

function check(form) {
    if(form.user.value == "as" && form.pass.value == "123")
    {
        window.open('https://www.youtube.com')
    }else{
        alert("Pass o nombre de usuario incorrecto")
    }
}

