$(document).ready(function () {
    var $regexname = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
        //Username is 8-20 characters long, no _ or . at the beginning, no __ or _. or ._ or .. inside, allowed characters, no _ or . at the end
    var $regexPassword = /^password$/;
    var $regexEmail = /^([0-9A-Za-z])+[0-9A-Za-z_\.\-]+\@(northeastern)\.(edu)$/;


    $('.username').on('keypress keydown keyup', function () {
        if (!$(this).val().match($regexname)) {
            // there is a mismatch, hence show the error message
            $('.nameE').removeClass('hidden');
            $('.nameE').show();
        }
        else {
            // else, do not display message
            $('.nameE').addClass('hidden');
            localStorage.setItem("username", $(this).val());
        }
    });

    $('.password').on('keypress keydown keyup', function () {
        if (!$(this).val().match($regexPassword)) {
            // there is a mismatch, hence show the error message
            $('.passwordE').removeClass('hidden');
            $('.passwordE').show();
        }
        else {
            // else, do not display message
            $('.passwordE').addClass('hidden');
        }
    });

    $('.email').on('keypress keydown keyup', function () {
        if (!$(this).val().match($regexEmail)) {
            // there is a mismatch, hence show the error message
            $('.emailE').removeClass('hidden');
            $('.emailE').show();
        }
        else {
            // else, do not display message
            $('.emailE').addClass('hidden');
        }
    });

$(document).on('click', 'form button[type=submit]', function(e) {
    var isValid = $(e.target).parents('form').isValid();
    if(!isValid) {
      e.preventDefault(); //prevent the default action
    }
});
});
