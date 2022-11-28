// when the dog button is clicked, call the ShowDog function
document.getElementById("dogButton").onclick = ShowDog;

// A function that changes the visibility of the dog based on the current state
function ShowDog(){
    if (document.getElementById("dog").style.display == "none"){
        document.getElementById("dog").style.display = "block";
    }
    else{
        document.getElementById("dog").style.display = "none";
    }
}