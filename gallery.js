
//selecting all required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image");
window.onload = ()=>{// once window loaded
    filterItem.onclick= (selectedItem) =>{
        if(selectedItem.target.classList.contains("item")){
            filterItem.querySelector(".active").classList.remove("active");
            selectedItem.target.classList.add("active");
            let filterName=selectedItem.target.getAttribute("data-name");
            filterImg.forEach((image)=>{
            let filterImages=image.getAttribute("data-name");
            //if user select the data-name value is equal to image-name
            if((filterImages == filterName) ||filterName =="all"){
                image.classList.remove("hide");
              image.classList.add("show");
            }else{
                image.classList.add("hide");
                image.classList.remove("show");
            }
            
            });
        }
        

    }
    for (let index = 0; index < filterImg.length; index++) {
        filterImg[index].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all available images
      }

}


//selecting all requirement elements
const previewBox=document.querySelector(".preview-box"),
previewImg= previewBox.querySelector("img"),
categoryName= previewBox.querySelector(".title p"),
closeIcon= previewBox.querySelector(".icon"),
shadow= document.querySelector(".shadow");

//full screen preview function
function preview(element){
    document.querySelector("body").style.overflow="hidden";
    let selectedPrevImg =element.querySelector("img").src;
    let selectedImgCategory = element.getAttribute("data-name");
    categoryName.textContent = selectedImgCategory;
    previewImg.src =selectedPrevImg;
    previewBox.classList.add("show");
    shadow.classList.add("show");
    
    closeIcon.onclick= ()=>{
        previewBox.classList.remove("show");  
        shadow.classList.remove("show");
        document.querySelector("body").style.overflow="scroll";
    }
}