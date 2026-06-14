const password =

document.getElementById(
"password"
);

function togglePassword(){

if(
password.type
==="password"
){

password.type=
"text";

}

else{

password.type=
"password";

}

}

document
.querySelector(
"form"
)

.addEventListener(

"submit",

function(e){

e.preventDefault();

const email=

document
.querySelector(
'input[type="email"]'
)

.value;

const pass=

password.value;

if(

email===""

||

pass===""

){

alert(

"Please fill all fields"

);

return;

}

alert(

"Login Successful (UI Demo)"

);

}

);

document
.querySelectorAll(
".social button"
)

.forEach(

(button)=>{

button
.addEventListener(

"click",

function(){

alert(

"UI only"

);

}

);

}

);

document
.querySelector(
".options a"
)

.addEventListener(

"click",

function(e){

e.preventDefault();

alert(

"Forgot Password UI"

);

}

);
