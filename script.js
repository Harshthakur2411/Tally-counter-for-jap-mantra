let count = 0;
let limit = null;
const conuter = document.getElementById("counter");
const bt1 = document.getElementById("btn1");
const bt2 = document.getElementById("btn2");
const doneAudio = document.getElementById("doneAudio");
const inputlimit = document.getElementById("limitInput");


inputlimit.addEventListener("input", function(){
    let val = limitInput.value.trim();

    if (val === "") {
      limit = null; // No limit set if input is empty
    } else {
      limit = parseInt(val);
  
      if (isNaN(limit) || limit <= 0) {
        // If invalid number or zero/negative, reset limit to null
        limit = null;
      }
    }
});


bt2.addEventListener("click", function () {
    if(limit===null){
        count++;
        conuter.textContent = count;
    } else{
        if(count < limit){
            count++;
            conuter.textContent = count;
            if(count === limit){
                doneAudio.play();
                if (navigator.vibrate) {
                    navigator.vibrate(500); // vibrate for 500 ms
                  }
            }
        }
        else {
            alert("Limit reached!");
          }
        
    }
   
    
    
});
bt1.addEventListener("click", function () {
    count = 0;
    conuter.textContent = 0;
    
    
});
