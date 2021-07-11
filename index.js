var noOfButtons = document.querySelectorAll("button").length;

for (i = 0; i < noOfButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonText = this.innerHTML;
    makeSound(buttonText);
    buttonAnimation(buttonText);
  });
}

document.addEventListener("keypress", function (event) {
  // document.style.color="green";
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var audioName = new Audio("sounds/tom-1.mp3");
      audioName.play();
      break;

    case "a":
      var audioName = new Audio("sounds/tom-2.mp3");
      audioName.play();
      break;

    case "s":
      var audioName = new Audio("sounds/tom-3.mp3");
      audioName.play();
      break;

    case "d":
      var audioName = new Audio("sounds/tom-4.mp3");
      audioName.play();
      break;

    case "j":
      var audioName = new Audio("sounds/snare.mp3");
      audioName.play();
      break;

    case "k":
      var audioName = new Audio("sounds/crash.mp3");
      audioName.play();
      break;

    case "l":
      var audioName = new Audio("sounds/kick-bass.mp3");
      audioName.play();
      break;

    default:
      break;
  }
}


function buttonAnimation(currentKey){

  var activeButton= document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  
  setTimeout(() => {
    activeButton.classList.remove("pressed");
    
  }, 300);
  
}