var list = document.getElementById("list")

function task(){
    var todo=document.getElementById("todoitem")
    var li=document.createElement("li")
    var litext=document.createTextNode(todoitem.value)
    li.appendChild(litext)

    var del=document.createElement("button")
    var deltext=document.createTextNode("DELETE TASK")
    del.setAttribute("class","btn")
    del.setAttribute("onclick","deleteit(this)")
    del.appendChild(deltext)
    li.appendChild(del)

    var editbtn=document.createElement("button")
    var edittext=document.createTextNode("EDIT TASK")
    editbtn.setAttribute("class","btnn")
    editbtn.setAttribute("onclick","edit(this)")
    editbtn.appendChild(edittext)
    li.appendChild(editbtn)

    
    
    




    list.appendChild(li)
    todoitem.value=""

}
function deleteit(a){
    a.parentNode.remove()
}
function edit(r){
    var editvalue=prompt("enter edit task:",r.parentNode.firstChild.nodeValue)

    r.parentNode.firstChild.nodeValue=editvalue
}
function deleteall(){
    list.innerHTML=""
}


function color(){
    var c=document.getElementById("todoitem")
    c.classList.add("focus")
}
