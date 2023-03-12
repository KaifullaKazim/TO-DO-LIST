function g(){
var x= document.getElementById("items").value
var y=document.getElementById("myitems")

var newtodo=document.createElement("div")

var todoname=document.createElement("li")
todoname.innerHTML=x

var i=document.createElement('i')
i.classList.add('far')
i.classList.add('fa-trash-alt')

newtodo.appendChild(todoname)
newtodo.appendChild(i)

y.appendChild(newtodo)
}

y=document.getElementById('myitems')
y.addEventListener('click',r)

function r(e)
{
    const element=e.target
    if(element.classList[0]=='far')
    {
        element.parentElement.remove()
    }
}