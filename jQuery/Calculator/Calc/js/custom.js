$("#formValidation").validate({

    rules:{
        username: {
            minLength: 2
        }
    },
    messages: {
        required: "Please enter your name",
        minLength : "Name atleast 2 characters"
    },

    submitHandler: function(form) {
      // some other code
      // maybe disabling submit button
      // then:
      $(form).submit();
    }
   });
  