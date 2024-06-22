document.getElementById('signupForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Save user details to local storage (for demonstration purposes only)
    localStorage.setItem('user', JSON.stringify({ username, email, password }));
    alert('User registered successfully!');
    window.location.href = 'login.html';
});

document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.password === password) {
        alert('Login successful!');
        // Redirect to a logged-in page or dashboard
        window.location.href = 'index.html';
    } else {
        alert('Invalid email or password!');
    }
});