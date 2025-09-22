"use strict";


        
function test() {
     let text = document.getElementById("learnMore");
     if (text.innerHTML === "hmmmm"){
 text.innerHTML =  "what is the thing you are waiting for?";
} else {
    text.innerHTML = "hmmmm";
  }
}


let toggle = true;


function anime() {
      const img = document.getElementById("myImage");
        if(toggle) {img.src = "https://res.cloudinary.com/dyqfa69ac/image/upload/v1758197787/sddefault_l7kpqf.jpg";
    
} else {
  img.src ="https://res.cloudinary.com/dyqfa69ac/image/upload/v1751284003/IMG_20250630_111128_sidnfa.jpg"
}
  
  toggle = !toggle;
}
