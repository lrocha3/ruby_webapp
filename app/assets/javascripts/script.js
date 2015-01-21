
/* JQUERY*/

$(document).ready(function () {


    /* Append the link to sign up in index.hmtl*/
    jQuery('<a/>', {
        id: 'signup_link',
        href: '#',
        text: 'SIGN UP'
    }).appendTo('#content');



    /* Datepicker Pop Up Calendar */
    $(function () {
        $(".datepicker").datepicker();
    });




    /* Focus and Blur to input = text, password and email*/
    $("input[type='text'], input[type='password'], input[type='email']").focus(function () {
        $(this).css("background-color", "#D4D2D0");
    });

    $("input[type='text'], input[type='password'], input[type='email']").blur(function () {
        $(this).css("background-color", "initial");
    });





    /* Function to scroll down slowly*/
    function scrollToAnchor(aid) {
        var aTag = $("a[id='" + aid + "']");
        $('html,body').animate({scrollTop: aTag.offset().top}, 'slow');
    }

    /* Anchors that call the function to slow down the scroll*/

    $("#features_link").click(function () {
        scrollToAnchor('features');
    });

    $("#contact_us_link").click(function () {
        scrollToAnchor('contact_us');
    });

    $("#signup_link").click(function () {
        scrollToAnchor('signup');

    });




    /* Fade of all images changing the opacity and moving to left and then right again. The moving only takes effect in second coloumn in the rows that have two coloumns*/

    $(".icons").hover(function () {
        $(this).stop().animate({"opacity": 0.7});
        $(this).animate({left: '25px'});
    }, function () {
        $(this).stop().animate({"opacity": 1});
        $(this).animate({left: '-25px'});

    });





}); // From ready function



/* AJAX */






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


