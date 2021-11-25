var userId, password, email;

function insert(){
    userId = document.getElementById("uid").value;
    password = document.getElementById("password").value;
    email = document.getElementById("email").value;
    console.log(userId, email, password);
}

document.getElementById("reg").onclick = function(){
     if(document.getElementById("uid").value=="" && document.getElementById("password").value=="" && document.getElementById("email").value==""){
     register();
     
     }
    else{
        login();
    insert();
    firebase.
    database().
    ref("member/" + userId)
    .set(
        {
            username : userId,
            email : email,
            password : password
        }
    );
     alert("Successfully Registered");
     document.getElementById("uid").value = "";
     document.getElementById("email").value = "";
     document.getElementById("password").value = "";}
}