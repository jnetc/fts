
var courses = [];
var index = 0;

(function init () {
for(var i = 0; i < 100; i++) {
courses.push(i);
}
createDOMobjects(loadMore(courses, index));
index += 10;
}());

function loadMore (courses, index) {
if(index == undefined) {
index = 0;
}
var loadedCourses = [];
for(var i = index; i < courses.length; i++) {
loadedCourses.push(courses[i]);
if(loadedCourses.length == 10) {
break;
}
}
return loadedCourses;
}

function createDOMobjects(list) {
var ul = document.querySelector("ul");

for(var i = 0; i < list.length; i++) {
ul.innerHTML += '<li>'+list[i]+'</li>'
}
}

var btn = document.querySelector("button");

btn.addEventListener('click', function(){
var list = loadMore(courses, index);

for(var i = 0; i < list.length; i++) {
console.log(list[i]);
}

createDOMobjects(loadMore(courses, index));

index += 10;

if(index > courses.length) {
index = courses.length - 10;
}
});
