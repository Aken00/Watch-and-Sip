console.log("javascript")
function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      }).then((response) => {console.log(response)})
    }
  }
//   As you can see in the code, we added a conditional to
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);