
                                                    // JAVASCRIPT FILE
                                                    
                                                    // DANIA JAWAD
                                                      // 20i0569
                                                     //   CS-B



inputInFile = document.querySelector('.file-input')
imgPreview = document.querySelector('.preview-img img')
choosingImg = document.querySelector('.choose-img')

let rotate_deg=0;
                                                    // FLIPPING IMAGE 90 LEFT
function lefttLL(){
    rotate_deg -=90;
    document.getElementById("pagal").style.transform = "rotate("+rotate_deg+"deg)";
    
}
                                                    //  FLIPPING IMAGE 90 RIGHT
function righttRR(){
    rotate_deg +=90;
    document.getElementById("pagal").style.transform = "rotate("+rotate_deg+"deg)";
    
}


let horizontalVal=1
                                                        // FLIPPING IMAGE HORIZONTALLY
function horizontalHH(){

    if(horizontalVal==1){
        horizontalVal = -1;
        document.getElementById("pagal").style.transform= "scaleX("+horizontalVal+")";
       // horizontalVal =1;
    }
    else if(horizontalVal==-1){
        horizontalVal = 1;
        document.getElementById("pagal").style.transform= "scaleX("+horizontalVal+")";
       // horizontalVal=-1;
    }
    else
    document.getElementById("pagal").style.transform= scale(1,1);
}

let verticalVal=1
                                                    //  FLIPPING IMAGE VERTICALLY
function verticalVV(){
    if(verticalVal==1){
        verticalVal = -1;
        document.getElementById("pagal").style.transform= "scaleY("+verticalVal+")";
        //verticalVal = 1;
    }
    else if(verticalVal==-1){
        verticalVal = 1;
        document.getElementById("pagal").style.transform= "scaleY("+verticalVal+")";
       // verticalVal = -1
    }
    else 
    document.getElementById("pagal").style.transform= scale(1,1);
}

                                                // PREVIEWING UPLOADED IMAGE
inputInFile.addEventListener('change',function(){
        
    file = inputInFile.files[0]
    if(file){
        imgPreview.src = URL.createObjectURL(file)
    }
    // container.classlist.remove('disable')

});
                                                    // UPLOADING IMAGE

choosingImg.addEventListener('click',function(){
        
    inputInFile.click();

});

choiceFilter = document.querySelectorAll('.filter button')
choiceName = document.querySelector('.filter-info .name')


rangeValue = document.querySelector('.slider input')
rangeValue2 = document.querySelector('.filter-info .value')

// SETTING DEFAULT VALUES

let brightness =100
let inversion = 0
let grayscale = 0
let saturation = 100
let blurr = 0
let sepia = 0
let rotatee = 0

// SHOWING SLIDER VALUES

choiceFilter.forEach(function(option){
      option.addEventListener('click',function(){
         document.querySelector('.filter .active').classList.remove('active')
         option.classList.add('active')
        choiceName.innerText = option.innerText
   
         rangeValue.max = 200
        if(option.id == 'brightness'){
            rangeValue.value = brightness
            rangeValue2.innerText = brightness + '%'
        }
        else if(option.id == 'inversion'){
            rangeValue.value = inversion
            rangeValue2.innerText = inversion + '%'
        }
        else if(option.id == 'saturation'){
            rangeValue.value = saturation
            rangeValue2.innerText = saturation + '%'
        }
        else if(option.id == 'grayscale'){
            rangeValue.value = grayscale
            rangeValue2.innerText = grayscale + '%'
        }
        else if(option.id == 'blur'){
            rangeValue.value = blurr
            rangeValue2.innerText = blurr + 'px'
            rangeValue.max = 25
            
        }
        else if(option.id == 'rotate'){
            rangeValue.value = rotatee
            rangeValue2.innerText = rotatee + 'deg'
            rangeValue.max = 360

        }
        else if(option.id == 'sepia'){
            rangeValue.value = sepia
            rangeValue2.innerText = sepia + '%'
        }

    })
})


// FUNCTION TO TRANSFROM IMAGE
function transformingImg(){

    document.getElementById("pagal").style.transform = "rotate("+rotate_deg+"deg)" ;
    document.getElementById("pagal").style.transform = "scaleX("+horizontalVal+")";
    document.getElementById("pagal").style.transform = "scaleY("+verticalVal+")";
   
}

// FUNCTION TO DISPLAY CHANGED FILTERS
function editingFilters(){
    document.getElementById("pagal").style.filter = "brightness("+brightness+"%) invert("+inversion+"%) grayscale("+grayscale+"%) saturate("+saturation+"%) blur("+blurr+"px) sepia("+sepia+"%)"
    document.getElementById("pagal").style.transform =  "rotate("+rotatee+"deg)"
}

// CHANGING FILTER VALUES
rangeValue.addEventListener('change',function(){

    rangeValue2.innerText = rangeValue.value + "%";

    selection = document.querySelector('.filter .active')

    if(selection.id == 'grayscale'){
        grayscale = rangeValue.value
    }

    else if(selection.id == 'brightness'){
        brightness = rangeValue.value
    }

    else if(selection.id == 'saturation'){
        saturation = rangeValue.value
    }

    else if(selection.id == 'inversion'){
        inversion = rangeValue.value
    }
    else if(selection.id == 'rotate'){
        rotatee = rangeValue.value
        rangeValue2.innerText = rangeValue.value + "deg";
    }
    else if(selection.id == 'sepia'){
        sepia = rangeValue.value
    }
    else if(selection.id == 'blur'){
        blurr = rangeValue.value
        rangeValue2.innerText = rangeValue.value + "px";
    }

    transformingImg();
    editingFilters();
})




// defaultImg = document.querySelector('.reset-filter')


                                                    // RESETTING THE IMAGE BACK TO ORIGINAL 

function DefaultPic(){

    brightness =100;
    inversion = 0;
    grayscale = 0;
    saturation = 100;
    horizontalVal=1;
    verticalVal=1;
    rotate_deg=0;

    blurr = 0
    sepia = 0
    rotatee = 0
    choiceFilter[0].click()
    rangeValue.value =brightness;
    rangeValue2.innerText = brightness + '%'
    transformingImg();
    editingFilters();

}


                                                            // SAVING THE IMAGE
imageSavingg = document.querySelector('.save-img');

imageSavingg.addEventListener("click",function(){

    const Imagee = document.createElement("canvas");
    const getContxt = Imagee.getContext("2d");

    Imagee.width =  imgPreview.naturalWidth;
    Imagee.height =  imgPreview.naturalHeight;
    
    getContxt.filter = "brightness("+brightness+"%) invert("+inversion+"%) grayscale("+grayscale+"%) saturate("+saturation+"%) blur("+blurr+"px) sepia("+sepia+"%)";
    getContxt.translate(Imagee.width/2,Imagee.height/2);
    if(rotate_deg!==0)
      getContxt.rotate(rotate_deg * Math.PI/180);

    getContxt.scale(horizontalVal,verticalVal);
    getContxt.drawImage(imgPreview,-Imagee.width/2,-Imagee.height/2,Imagee.width,Imagee.height)

    const linkk = document.createElement("a");
    linkk.download = "editedPhoto.png";
    linkk.href = Imagee.toDataURL();
    linkk.click();
})


                                                                // the end