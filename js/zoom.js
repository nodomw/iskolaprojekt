const zoomElement = document.querySelector(".plane");
let zoom = 1;
const ZOOM_SPEED = -0.05;

document.addEventListener("wheel", function(e) {  
    
    if(e.deltaY > 0){    
        zoomElement.style.transform = `scale(${zoom += ZOOM_SPEED})`;  
    }else{    
        zoomElement.style.transform = `scale(${zoom -= ZOOM_SPEED})`;  }

});

// mouse postion doesnt work with zoom cba to fix