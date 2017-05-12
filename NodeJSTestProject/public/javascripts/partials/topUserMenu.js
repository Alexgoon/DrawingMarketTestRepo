/**
 * Created by Russkov.Alexander on 4/30/2017.
 */
function Logout() {
    //alert("Log out!");
    //var xhr = new XMLHttpRequest();
    //xhr.open("POST", '/logout');
    //xhr.send();

    $.post(
        "/logout",
        null,
        onAjaxSuccess
    );

}


function onAjaxSuccess(data) {
    // Здесь мы получаем данные, отправленные сервером и выводим их на экран.
    //if typeof data.redirect == 'string'
    window.location = data.redirect

}