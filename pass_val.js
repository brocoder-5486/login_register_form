function pass_validity(){
    const password = document.querySelector('input[name=password]');
    const confirmPassword = document.querySelector('input[name=confirmPassword]');

    if(password.value===confirmPassword.value){
        confirmPassword.setCustomValidity('');
    }else{
        confirmPassword.setCustomValidity('passwords does not match');
    }
}