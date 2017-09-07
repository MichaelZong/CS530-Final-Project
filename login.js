function login() {  
  
    var username = document.getElementById("username");  
    var pass = document.getElementById("password");  
  
    if (username.value == "") {  
  
        alert("Please input username");  
  
    } else if (pass.value  == "") {  
  
        alert("Please input password");  
  
    } else if(username.value == "admin" && pass.value == "123456"){  
  
        window.location.href="main.html";  
  
    } else {  
  
        alert("Please input correct username and password！")  
  
    }  
}  