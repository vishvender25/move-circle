// alert("helllo")
// document.getElementById("move-obj").addEventListener("click",(event)=>{
//     alert("got clicked");
// })
// function move(key){
//     console.log(key);
   
//     switch(key){
//       case "a":
//         person.style.color = "blue";
//         break;

//     }
// }

var person = document.getElementById("move-obj2");

document.addEventListener("keypress", function(event){
    var keyPressed = event.key;
    switch(keyPressed){
        case "a":
            person.style.marginLeft = "0px";
            break;
        case "d":
            person.style.marginLeft = "20.5%";
            break;
        case "w":
            person.style.marginTop = "0%";
            break;  
        case "s":
            person.style.marginTop = "20.5%";
            break;
    }
});
