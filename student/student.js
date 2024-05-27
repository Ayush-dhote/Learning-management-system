let user=document.querySelector("#user")
let type=document.querySelector("#type")
let logout=document.querySelector("#logout")
let data=document.querySelector("#course")
let username=sessionStorage.getItem("loginuser")
let logged_user=JSON.parse(username)
user.textContent =logged_user.username
type.textContent =`(${logged_user.type})`
let course=localStorage.getItem("users")
let course_name=JSON.parse(course)

logout.addEventListener("click",(event)=>{
    sessionStorage.clear()
    window.location.href="../authentication/index.html"
})
let clutter=""
function courses(course_name){
    course_name.forEach((element,i) => {
        if(element.username==logged_user.username){
            element.courses.forEach((element)=>{
                clutter+=`
                <div class="course">
                <div id="top"><h1>${element}<h1/></div>
                    <div id="bottom">
                    <button id="learn" onclick="assign(event)">
                        start Learning
                    </button>
                </div>
            </div>`
            console.log(element);    
            })
        }
    });
    data.innerHTML=clutter
}
courses(course_name)
// console.log(logged_user.username);