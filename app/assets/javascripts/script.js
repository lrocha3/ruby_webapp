
/* JavaScript */

function hello_cookie() {

    //     document.cookie = "username=" + escape(document.forms["login_form"]["username_login"].value) + ";";

    var username = document.cookie.match(new RegExp('username' + '=([^;]+)'));
    if (username) {
        username = username[1];
        alert("Hi " + username + "!");
    }



}


function verify_cookie() {

    //     document.cookie = "username=" + escape(document.forms["login_form"]["username_login"].value) + ";";

    if (/(^|;)\s*username=/.test(document.cookie)) {    // cookie exist :)






    }
    else {
        alert("You didn't login! Please do the login first! :)");
        window.location.replace("index.xhtml");
    }


}


