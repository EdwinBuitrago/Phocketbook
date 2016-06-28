var main = function() {
  $('form').submit(function() {
    var firstName = $('#first').val();
    var lastName = $('#last').val();
    var Email = $('#email').val();
    var Password = $('#password').val();
    
    if(firstName === "") {
      $('.first-name-error').text('Please enter your first name'); 
    }

  	if(lastName ===""){
    	$('.last-name-error').text('Please enter your last name');
  	}
    
    if(Email ===""){
      $('.email-error').text('Please enter your email address');
    }
    
    if(Password ===""){
      $('.password-error').text('Please enter your password');
    }
    
    else if (Password.length < 8){
    $('.password-error').text('Short passwords are easy to guess. Try one with at least 8 characters');
    }
    
    if(Email==='me@example.com'){
      $('.email-error').text('This email is already taken');
    }
  return false;
  
  
});

};
$(document).ready(main);
