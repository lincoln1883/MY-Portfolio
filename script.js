function clickListener(event) { 
  event.preventDefault();
  
  let emailInput = document.querySelector('#email'); 
  let messageInput = document.querySelector('#message');

  let emailText = emailInput.value; 
  let messageText = messageInput.value;

	let emailvalue=emailElement.value;
	let messageValue=messageElement.value;

  if(email.includes('@')) { 
	    return true;
    } else { 
	    return false;
    }
}    