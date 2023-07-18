$("#frmRegister").validate({
    rules: {
        FirstName: {
            required: true,
        },
        LastName: {
            required: true,
        },
        EmailId: {
            required: true,
        },
        MobileNo: {
            required: true,
        },       
        Password: {
            required: true,
            minlength: 8
        },
        ConfirmPassword: {
            required: true,
            equalTo: "#txtpassword"
        }
        
    },
    messages: {
        FirstName: {
            required: "Please Insert FirstName"
        },
        LastName: {
            required: "Please Insert LastName"
        },
        EmailId: {
            required: "Please Insert Email-Id"
        },
        MobileNo: {
            required: "Please Insert MobileNo",
            minlength: "Please Enter Minimum 10 Number!",
            maxlength: "Please Enter Minimum 10 Number!"
        },
        Password: {
            required: "Please Insert Passwort",
            minlength: "Please Enter Minimum 8 character!"
        },
        ConfirmPassword: {
            required: "Please Insert Confirm-password",
            equalTo: "Confirm-Password Is Not Match"
        }        
    }
    , errorClass: "text-danger"
});

if ($("#frmRegister").valid()) {
    //form Submit Code
}


function onlyChar() {

    var ch = String.fromCharCode(event.keyCode);
    var filter = /[a-zA-Z0-9 ]/;
    if (!filter.test(ch)) {
        event.returnValue = false;
    }
}

function onlyCharnum() {

    var ch = String.fromCharCode(event.keyCode);
    var filter = /[a-zA-Z0-9]/;
    if (!filter.test(ch)) {
        event.returnValue = false;
    }
}

function onlyNum() {
    var no = String.fromCharCode(event.keyCode);
    var filter = /[0-9]/;
    if (!filter.test(no)) {

        event.returnValue = false;
    }
}