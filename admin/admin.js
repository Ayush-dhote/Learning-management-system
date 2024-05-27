let user = document.querySelector("#user");
let type = document.querySelector("#type");
let logout = document.querySelector("#logout");
let create_course = document.querySelector("#create_course");
let create_button = document.querySelector("#create_button");
let course_window = document.querySelector("#course");
// let delete_btn=document.querySelector("#delete_btn")
let username = sessionStorage.getItem("loginuser");
let logged_user = JSON.parse(username);
user.textContent = logged_user.username;
type.textContent = `(${logged_user.type})`;
let userdata=localStorage.getItem("users")
let parsed=JSON.parse(userdata)
let duplicate = false;
let courses;
let ass_courses = [];
if (!courses) {
  courses = [];
}n

logout.addEventListener("click", (event) => {
  sessionStorage.clear();
  window.location.href = "../authentication/index.html";
});

  let all_courses = localStorage.getItem("courses");
  courses = JSON.parse(all_courses);
  console.log(courses);

create_button.addEventListener("click", (event) => {
  courses.forEach((elem) => {
    if (elem === create_course.value) {
      duplicate = true;
      return;
    }
  });

  if (duplicate) {
    alert("duplicate error");
  }
  if (!duplicate) {
    //
    courses.push(create_course.value);
    let json = JSON.stringify(courses);
    localStorage.setItem("courses", json);
    // console.log("course created")
    data(create_course);
  }
});
let clutter = "";
function data(courses) {
  courses.forEach((element, i) => {
    clutter += `
        <div class="course">
        <div id="top"><h1>${element}<h1/></div>
            <div id="bottom">
            <button id="ass-${i}" onclick="assign(event)">
                Assign course
            </button>
            <button id="del-${i}" onclick="remove(event)">
                Remove course
            </button>
        </div>
    </div>`;
    // console.log(courses[i],i);
  });
  course_window.innerHTML = clutter;
}
data(courses);

function assign(event) {
  let id = +event.target.id.split("-")[1];
  ass_courses.push([courses[id]]);
  JSON.stringify(sessionStorage.setItem("coursesname", ass_courses));
  window.location.href = "./studentlist.html";
}

function remove(event){
    let id=+event.target.id.split("-")[1]
    courses.splice(id,1)
    console.log(courses);
    let data=JSON.stringify(courses)
    localStorage.setItem("courses",data)
    location.reload()
    data(courses);
}
