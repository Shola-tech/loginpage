document.getElementById('toggle-password').addEventListener('click', function(){
    var passwordField = document.getElementById('password');
    var toggleP = document.getElementById('toggle-password');

    //toggle the password type between password and text
    if (passwordField.type === 'password'){
        passwordField.type = 'text';
        toggleP.textContent = 'Hide';
    }
    else{
        passwordField.type = 'password';
        toggleP.textContent = 'Show';
    }
});