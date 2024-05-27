let user=document.querySelector("#user")
let type=document.querySelector("#type")
let logout=document.querySelector("#logout")
let heading=document.querySelector("#heading h2")
let username=sessionStorage.getItem("loginuser")
let logged_user=JSON.parse(username)
user.textContent =logged_user.username
type.textContent =`(${logged_user.type})`
let users=localStorage.getItem("users")
let details=JSON.parse(users)
let course_name=sessionStorage.getItem("coursesname");
heading.textContent=`Course:${course_name}`
// console.log(course_name);
// console.log(details);
let arr=[]
let duplicate=false


// console.log(username);

logout.addEventListener("click",(event)=>{
    sessionStorage.clear()
    window.location.href="../authentication/index.html"
})
function showdata(details){
    let clutter=""
    details.forEach((element,i) => {
        if(element.type=="student"){
            clutter+=`
            <div id="table">
            <h3>${element.username}</h3> 
            <button id="ass-${i}" class="buttons" onclick="assign(event)">Assign</button>
           
            </div>
            `
        }
        // console.log(element.username);
    });
    student.innerHTML=clutter
}
showdata(details)

function assign(event){
    
    details.forEach(element=>{
        element.courses.forEach(element1=>{
            if(element1===course_name){
                duplicate=true;
                return
            }
        })
    })
    if(duplicate){
        alert("course already assigned")
    }
    if(!duplicate){
        let id=+(event.target.id.split("-")[1]);
        details[id].courses.push(course_name)
        localStorage.setItem("users",JSON.stringify(details))
        let getdata=localStorage.getItem("users");
        details=JSON.parse(getdata)
        alert("Course assigned")
        // console.log(details);
    }
}

// console.log(arr);