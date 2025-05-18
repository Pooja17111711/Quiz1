
    function showForm(formType) {
      document.getElementById('signInForm').style.display = formType === 'signIn' ? 'block' : 'none';
      document.getElementById('signUpForm').style.display = formType === 'signUp' ? 'block' : 'none';
    }
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }

    function handleSignUp() {
      const name = document.getElementById('signupName').value.trim();
      const email = document.getElementById('signupEmail').value.trim();
      const password = document.getElementById('signupPassword').value.trim();
      const dob = document.getElementById('signupDOB').value;
      const qualification = document.getElementById('signupQualification').value;

      if (!name || !email || !password || !dob || !qualification) {
        alert('Please fill out all fields.');
        return;
      }

      if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      localStorage.setItem('quizUser', JSON.stringify({ name, email, password, dob, qualification }));
      alert('Registration successful! Please sign in.');
      showForm('signIn');
    }
    function handleSignIn() {
      const username = document.getElementById('signinUsername').value.trim();
      const password = document.getElementById('signinPassword').value.trim();
      const storedUser = JSON.parse(localStorage.getItem('quizUser'));

      if (storedUser && (storedUser.name === username) && storedUser.password === password)
         {
        alert(`Welcome, ${storedUser.name}!`);
        window.location.href = 'quiz.html'; // Replace with your quiz homepage
      } else 
      {
        alert('Invalid credentials.');
      }
    }