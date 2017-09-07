<span style="font-size:14px;">  
  
        var  usernameRegex = /^\w{3,15}$/;  
          
        var passwordRegex = /^\w{6,12}$/;  
          
        var emailRegex = /^\w+@\w+(\.\w+)+$/;  
       
        var realNameRegex = /^[\u4e00-\u9fa5]{2,5}$/;  
          
         
        function validateForm(){   
            var flag = true;  

            var usernameNode = byId("username");   
            var username = usernameNode.value;    
            if(!usernameRegex.test(username)){      
                byId("username_span").style.color = "red";   
                flag = false;        
            }  
              
            
            var passwordNode = byId("password");  /
            var password = passwordNode.value;  
            if(!passwordRegex.test(password)){  
                byId("password_span").style.color = "red";  
                flag = false;  
            }  
              
              
            var rePasswordNode = byId("rePassword");  /  
            var rePassword = rePasswordNode.value;  
            if(!password==rePassword){  
                byId("rePassword_span").style.color = "red";  
                flag = false;  
            }else if(!passwordRegex.test(rePassword)){  
                byId("rePassword_span").style.color = "red";  
                flag = false;  
            }else{  
                byId("rePassword_span").style.color = "green";  
            }  
              
              
            var emailNode = byId("Email");  //
            var email = emailNode.value;  
            if(!emailRegex.test(email)){  
                byId("Email_span").style.color = "red";  
                flag = false;  
            }  
              
              
            var realNameNode = byId("realName");    
            var realName = realNameNode.value;  
            if(!realNameRegex.test(realName)){  
                byId("realName_span").style.color = "red";  
                flag = false;  
            }  
              
              
            var provinceNode = byId("state");  
            var state = provinceNode.value;  
            if("--Make a selection--" == state){  
                byId("state_span").style.color = "red";  
                flag = false;  
            }  
  
            return flag;  
        }  
              
        function byId(id){  
            return document.getElementById(id);  
        }  
              
        function checkUsername(node){ 
            var username = node.value;   
            if(!usernameRegex.test(username)){    
                byId("username_span").style.color = "red"; 
            }else{  
                byId("username_span").style.color = "green";  
            }  
        }  
          
        function checkPassword(node){  
            var password = node.value;  
            //alert("111");  
            if (!passwordRegex.test(password)) {  
                byId("password_span").style.color = "red";  
            }  
            else {  
                byId("password_span").style.color = "green";  
            }  
        }     
              
        function checkRePassword(node){  
            var rePassword = node.value;  
            var password = byId("password").value;  
            //alert(repassword+"***"+password);           
            if(!password==rePassword){                    
                byId("rePassword_span").style.color = "red";  
            }else if(!passwordRegex.test(rePassword)){  
                byId("rePassword_span").style.color = "red";  
            }else{  
                byId("rePassword_span").style.color = "green";  
            }  
        }         
  
        function checkEmail(node){   
             
            var email = node.value;  
            if(!emailRegex.test(email)){  
                byId("Email_span").style.color = "red";  
            }else{  
                byId("Email_span").style.color = "green";  
            }  
        }  
              
        function checkName(node){  
            var realName = node.value;  
            if(!realNameRegex.test(realName)){  
                byId("realName_span").style.color = "red";  
            }else{  
                byId("realName_span").style.color = "green";  
            }  
        }  
          
        function checkProvince(node){  
            var state = node.value;  
            if("--Make a selection--" == state){  
                byId("state_span").style.color = "red";  
            }else{  
                byId("state_span").style.color = "green";  
            }  
        }  
  
</span>  