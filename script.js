document.getElementById('subscribe-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let firstName = document.getElementById('fname').value;
    let lastName = document.getElementById('lname').value;
    let email = document.getElementById('email').value;

    console.log(`Subscription Details: ${firstName} ${lastName}, ${email}`);
});
