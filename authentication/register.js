let form1=document.querySelector("#form1")
let login=document.querySelector("#lg")
let register=document.querySelector("#rg");
let reg=document.querySelector("#register");
let log=document.querySelector("#login");
let reg_button=document.querySelector("#button")
let name=document.querySelector("#name")
let username=document.querySelector("#username")
let email=document.querySelector("#email")
let password=document.querySelector("#password")
let login_name=document.querySelector("#luname")
let login_password=document.querySelector("#lpassword")
let select=document.querySelector("#noth #select")
let log_button=document.querySelector("#log-botton")
let details=[]
let type=""
let duplicate=false


login.addEventListener("click",(event)=>{
    reg.style.display="none"
    log.style.display="initial"
})
register.addEventListener("click",(event)=>{
    reg.style.display="initial"
    log.style.display="none"
})

reg_button.addEventListener("click",(event)=>{
    validation(name,username,password,email)
})

function validation(name,username,password,email){
    if(name.value=="" && username.value=="" && password.value=="" && email.value==""){
        alert("fill all inputs")
 
    }
    details.forEach(element=>{
        if(element.username==username.value){
            duplicate=true;
            return
        }
    })
    if(duplicate){
        alert("username not available")
    }
    if(!duplicate){
        details.push({
            name: name.value,
            username: username.value,
            password: password.value,
            type: select.value,
            courses: []
        })
        let json=JSON.stringify(details);
        localStorage.setItem("users",json)  
        alert("user registered")
    }
    
   location.reload()
   reg.style.display="none"
   log.style.display="initial"
}
// localStorage.clear() 

    let student=localStorage.getItem("users")
    details=JSON.parse(student)
    console.log(details);

log_button.addEventListener("click",(event)=>{
    details.forEach(element=>{
        if(login_name.value==element.username && login_password.value==element.password && element.type=="admin"){
            window.location.href="../admin/index.html"
            sessionStorage.setItem("loginuser",JSON.stringify({
                username: element.username,
                type: element.type
            }))
        }
       else if(login_name.value==element.username && login_password.value==element.password && element.type=="student"){
            window.location.href="../student/index.html"
            sessionStorage.setItem("loginuser",JSON.stringify({
                username: element.username,
                type: element.type
            }))
            
        }
    })
})
// sessionStorage.clear()