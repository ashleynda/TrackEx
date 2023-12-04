// write your code here
let form = document.getElementById("#signup");
form.addEventListener('click', () => {
    let email = document.querySelector("#email");
    let password = document.querySelector("password");

    let signupRequest = {
        email: email.value,
        password: password.value
    };

    console.log(signupRequest);

    const url = 'http://localhost:8080/TrackEx/register';

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(signupRequest),
        headers: {
            'Content-Type': 'application/json; chaarset=UTF-8'
        },
    })
    .then(response => response.text())
    .then(responseText => {
        document.getElementById("signup-response").innerText = responseText;
    })
    .catch(error => {
        console.error('Error:', error);
    })
});


let form1 = document.getElementById("signin");
form1.addEventListener('click', () => {
    let signinEmail = document.querySelector("#signin-email");
    let signinPassword = document.querySelector("#signin-password");

    let signinRequest = {
        signinEmail: signin-email.value,
        signinPassword: signin-password.value
    };

    console.log(signinRequest);
    const loginUrl = 'http://localhost:8080/TrackEx/login';

    fetch(loginUrl, {
        method: 'PATCH',
        body: JSON.stringify(signinRequest),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
    })
    .then(response => response.text())
    .then(responseText => {
        document.getElementById("signin-response").innerText = responseText;
        localStorage.setItem('loggedinUser', signinEmail.value);
    })
    .catch(error => {
        console.error('Error:', error)
    })
});




