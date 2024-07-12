var inputBox = document.querySelector(".inputBox");
var list_container = document.querySelector(".list_container");
var button1 = document.getElementsByTagName("button")[0];

button1.addEventListener("click", function addTask() {
    if (inputBox.value === "") {
        alert("you should add task");
    } 
    else {
        console.log(inputBox.value);
        var unrealicon = document.createElement("li");
        unrealicon.className = "unrealicon";
        unrealicon.innerHTML = inputBox.value;
        list_container.appendChild(unrealicon);
        unrealicon.style.display = "block";
        var span = document.createElement("span");
        span.id = "span1"
        unrealicon.appendChild(span);
        
    }
    inputBox.value = "";
});

list_container.addEventListener("click", function (ele) {
    if(ele.target.tagName===("LI")){
        var span2 = document.createElement("span")
        span2.className = "span2"
        span2 = ele.target.querySelector(".span2")
        if(span2){
            span2.remove()
            ele.target.style.textDecoration = "none"
        }
        else{
            var newSpan2 = document.createElement("span")
            newSpan2.className = "span2"
            // ele.target.classList.add("unrealicon")
            ele.target.appendChild(newSpan2)
            ele.target.style.textDecoration = "line-through"
        }
    }
    else if(ele.target.id === ("span1")){
        ele.target.parentElement.remove()
    }
    
});


























// if (ele.target.tagName === "LI") {
//     var Span2 = document.createElement("span");
//     Span2.className = "span2";
//     var span2 = ele.target.querySelector(".span2");
//     if (span2) {
//         span2.remove();
//         ele.target.style.textDecoration = "none";
//     } else {
//         var newSpan2 = document.createElement("span");
//         newSpan2.className = "span2";
//         ele.target.classList.add("unrealicon");
//         ele.target.appendChild(newSpan2);
//         ele.target.style.textDecoration = "line-through";
//     }
    
// } else if (ele.target.id === "span1") {
//     ele.target.parentElement.remove();
// }