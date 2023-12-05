let link = 'https://e718-62-173-45-70.ngrok-free.app';

let form = document.getElementById("signup");
form.addEventListener('submit', () => {
    event.preventDefault();

    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let username = document.getElementById("user-username");

    localStorage.setItem("currentUser", username.value);

    let signupRequest = {
        email: email.value,
        password: password.value
    };

    console.log(signupRequest);

    const url = `${link}/TrackEx/register`;

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(signupRequest),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json()) 
    .then(responseObject => {
        if(typeof responseObject.data !== 'string'){
            document.getElementById("signup-response").innerHTML = "Sign up Successful"
        } else{
            let response = document.getElementById("signup-response");
            response.innerHTML = responseObject.data;
            response.style.color = 'red';
        }
        
    })
    .catch(error => {
        console.error('Error:', error);
    })
});

let loginButton = document.querySelector('#login-button');
loginButton.addEventListener('click', () => {

    event.preventDefault();
    document.getElementById('signup-segment').style.display = 'none';
    document.getElementById('login-segment').style.display = 'flex';
});

let cancelButton = document.querySelector('#cancel-login');
cancelButton.addEventListener("click", () => {
    document.getElementById('signup-segment').style.display = 'flex';
    document.getElementById('login-segment').style.display = 'none';
});


let form1 = document.getElementById("signin");
form1.addEventListener('submit', () => {

    event.preventDefault();
    let signinEmail = document.querySelector("#signin-email");
    let signinPassword = document.querySelector("#signin-password");

    let signinRequest = {
        email: signinEmail.value,
        password: signinPassword.value
    };

    console.log(signinRequest);
    const loginUrl = `${link}/TrackEx/login`;

    fetch(loginUrl, {
        method: 'PATCH',
        body: JSON.stringify(signinRequest),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(responseObject => {

        if(typeof responseObject.data !== 'string'){
            document.getElementById("login-response").innerHTML = "Sign in Successful";
            localStorage.setItem('loggedinUser', responseObject.data.id);
            window.location = './dashboard.html';
        } else{
            let response = document.getElementById("login-response");
            response.innerHTML = responseObject.data;
            response.style.color = 'red';
        }
        
    })
    .catch(error => {
        console.error('Error:', error)
    })
});




