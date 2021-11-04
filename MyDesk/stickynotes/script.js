var container2 = document.getElementsByClassName("container2")[0];
var container3 = document.getElementsByClassName("container3")[0];
var checkIcon = document.getElementById("check-icon");
var xicon = document.getElementById("x-icon");
var i = 0;

xicon.addEventListener("click", function(){
    TakeNote();    
})

checkIcon.addEventListener("click", function(){
    createNote();
})

function TakeNote(){
    if(container3.style.display == "none"){
        container3.style = "block";
    } else {
        container3.style.display = "none";
    }
}

function createNote(){
    var noteText = document.getElementById("note-text").value;
    var node0 = document.createElement("div");
    var node1 = document.createElement("h1");

    node1.innerHTML = noteText;
    
    node1.setAttribute("style", "width:250px; height:250px; font-size:26px; padding:25px; margin-top:10px; overflow:hidden; box-shadow: 10px 10px 25px 0px rgba(105, 92, 92, 0.918)");  

    node1.style.margin = margin();
    node1.style.transform = rotate();
    node1.style.background = color(); 

    node0.appendChild(node1);

    container2.insertAdjacentElement("beforeend", node0);
    node0.addEventListener("mouseenter", function(){
        node0.style.transform = "scale(1.1)";
    })

    node0.addEventListener("mouseleave", function(){
        node0.style.transform = "scale(1)";
    })

    node0.addEventListener("dblclick", function(){
        node0.remove();
    })

    document.getElementById("note-text").value = '';
    
}

$('.dropdown-toggle').Wallpaper()

function margin(){
    var random_margin = ["-5px", "1px", "5px", "10px", "15px", "20px"];
    
    return random_margin[Math.floor(Math.random() * random_margin.length)];  //to generate a random index
}

function rotate(){
    var random_rotate = ["rotate(3deg)", "rotate(1deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-10deg)"];

    return random_rotate[Math.floor(Math.random() * random_rotate.length)];
}

function color(){
    var randon_color = ["#CD2C91", "#7B68EE", "#00FA9A", "#20B2AA", "#BC8F8F", "#FF6347"];
    
    if (i > randon_color.length - 1){
        i = 0;
    }
    return randon_color[i++];
}

function handleOnChangeEvent(x){
    document.body.style.backgroundImage = "url('"+x+"') ";
}

