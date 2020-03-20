const usernamename=document.getElementById('username')
const mail=document.getElementById('mail')
const password=document.getElementById('password')
const newpassword=document.getElementById('password2')
const form=document.getElementById('form')
const error=document.getElementById('error')

form.addEventListener('submit', (e) => { 

let messages=[]
if (username.value==='' || username.value==null){
messages.push('name is required')
}
if(password.value.length<6){
    messages.push('password must be at leat 6 characters')
}
if(messages.length>0){
e.preventDefault()
error.innerText=messages.join(' , ')
}


})




function verifMail(champ)
{
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(!regex.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}


var verif=verifMail(form.mail)
if(verifMail)
return true;
else{
    messages.push("email is not valid");
    return false;
}