var myNodeList = document.getElementsByTagName("li");

for(i=0;i<myNodeList.length;i++) {
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

var close = document.getElementsByClassName("close");

for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

function newElement() {
    let li = document.createElement("li"); //Creating a list element
    let inputValue = document.getElementById("myInput").value; //Fetching the Value from Textbox
    let textNode = document.createTextNode(inputValue); //Using that input value, creating a text node
    li.appendChild(textNode);//appending that text node to the list

    if (inputValue === "") {
        alert("Please Enter the Value");
    }

    else {
        document.getElementById("myUl").appendChild(li);
    }

    document.getElementById("myInput").value = "";

    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}