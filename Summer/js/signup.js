document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = Document.getElementById('address').value;
    var password = document.getElementById('password').value;

    var userData = {
      name: name,
      email: email,
      password: password
    };
  
    localStorage.setItem('userData', JSON.stringify(userData));
  
   
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
   
    window.location.href = '../html/logn-in.html';
    
  });