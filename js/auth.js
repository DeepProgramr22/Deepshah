// auth.js
document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Send verification email
            userCredential.user.updateProfile({
                displayName: username
            }).then(() => {
                userCredential.user.sendEmailVerification().then(() => {
                    alert('Verification email sent!');
                });
            });
        })
        .catch((error) => {
            alert(error.message);
        });
});

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            if (userCredential.user.emailVerified) {
                alert('Login successful');
                window.location.href = 'index.html';
            } else {
                alert('Please verify your email first.');
            }
        })
        .catch((error) => {
            alert(error.message);
        });
});