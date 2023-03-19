function validate(){
    let username=document.getElementById('username').value
    let email=document.getElementById('email').value
    let password=document.getElementById('password').value
    let confirm=document.getElementById('confirm').value

    checkusername(username)
    checkemail(email)
    checkpassword(password)
    checkconfirm(password,confirm)
}

function checkusername(username){

if(username.length>7){
    document.getElementById('username').classList.replace('error','success')
    document.getElementById('username_error').innerText=''
    
}

else{
    document.getElementById('username').classList.add('error')
    document.getElementById('username_error').innerText='Username must be 8 latters long'
}
} 
function checkemail(email){

if(email.length>8 && email.includes('@'&&'.')){
    document.getElementById('email').classList.replace('error','success')
    document.getElementById('email_error').innerText=''
}

else{
    document.getElementById('email').classList.add('error')
    document.getElementById('email_error').innerText='enter valid email'
}
}


function checkpassword(password){

if(password.length>8){
    document.getElementById('password').classList.replace('error','success')
    document.getElementById('password_error').innerText=''
}

else{
    document.getElementById('password').classList.add('error')
    document.getElementById('password_error').innerText='password at least 8 latter'
}
} 

function checkconfirm(password, confirm){

if(confirm==password && password!=''){
    document.getElementById('confirm').classList.replace('error','success')
    document.getElementById('confirm_error').innerText=''
}

else{
    document.getElementById('confirm').classList.add('error')
    document.getElementById('confirm_error').innerText='confirm password must be same as password'
}
} 