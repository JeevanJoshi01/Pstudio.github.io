const infoIcon = document.getElementById("icon-info");
const infoBtn = document.getElementById("btn-info");
const fileIcon = document.getElementById("icon-camera");
const fileBtn = document.getElementById("btn-camera");

infoIcon.addEventListener("click", ()=>{
    if(infoBtn.style.visibility == "hidden"){
        infoBtn.style.visibility = "visible"
    }
    else{
        infoBtn.style.visibility = "hidden"
    }
})

infoBtn.addEventListener("click", ()=>{
    window.open('https://forms.gle/1tgEYnzAd3upXhB96','_blank');
})

fileBtn.addEventListener("click", ()=>{
    window.open('https://forms.gle/fLdxjFG1KC6sxYMEA','_blank');
})

fileIcon.addEventListener("click", ()=>{
    if(fileBtn.style.visibility == "hidden"){
        fileBtn.style.visibility = "visible"
    }
    else{
        fileBtn.style.visibility = "hidden"
    }
})

// if (infoBtn.style.visibility = "visible") {
//     const timeout = document.getElementsByClassName('Upload_Information')
//     setTimeout(hideElement, 1000) //milliseconds until timeout//
//     function hideElement() {
//       timeout.style.display = 'none'
//     }
// }