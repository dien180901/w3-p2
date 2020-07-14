// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
let dem=0;
let all=[];
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
let checked=[];
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  dem++;
  li.setAttribute('id',dem.toString());
  li.setAttribute('onclick',"clickLi(this.id)");
  var inputValue = document.getElementById("myInput").value;
  all.push(inputValue);
  li.setAttribute("value",inputValue);
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
function clickLi(id){
    
    let i=document.getElementById(id);
    checked.push(i.getAttribute("value"));
    //console.log(checked);
}
 function clickChecked(){
    let i=document.getElementById('myUL');
        let a=checked.map(i=> document.getElementById("myUL").innerHTML=`<li class="checked">${i}</li>`) .join("");   
    document.getElementById("myUL").innerHTML=`<ul>${a}</ul>`
}
function search(a){
    for (let i=0;i<checked.length;i++){
        if (checked[i]==a){return true}
    }
    return false;
}
function clickAll(){
    let i=document.getElementById('myUL');
        let a=all.map(i=>{ 
            if (search(i)===true){
            return document.getElementById("myUL").innerHTML=`<li class="checked">${i}</li>`;
            }
            else{
            return document.getElementById("myUL").innerHTML=`<li>${i}</li>`
                
        }
        }).join("");
        document.getElementById("myUL").innerHTML=`<ul>${a}</ul>`
   // console.log(search("a"));
   console.log(a);
}

console.log(search("a"));