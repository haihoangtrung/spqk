document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;

    
    var storedData = localStorage.getItem('userData');
    if (storedData) {
      var userData = JSON.parse(storedData);
      if (email === userData.email && password === userData.password) {
       
        window.location.href = './mainpage.html';
      } else {
       
        alert('Email hoặc mật khẩu không chính xác!');
      }
    } else {
     
      alert('Người dùng không tồn tại!');
    }

    
    document.getElementById('login-email').value = '';
    document.getElementById('login-password').value = '';
  });