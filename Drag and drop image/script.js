
const dragArea=document.querySelector(".appBody"),
dragText=dragArea.querySelector("h3"),
button=dragArea.querySelector("button"),
input=dragArea.querySelector("input");
let MyFile;


button.onclick =()=>{
    input.click()
}

input.addEventListener("change",function(){
    MyFile=this.files[0];
    dragArea.classList.add("active");
})

dragArea.addEventListener("dragover",(event)=>{
    event.preventDefault();
    dragArea.classList.add("active");

    dragText.textContent="Relase To Upload File";
})

dragArea.addEventListener("dragleave", ()=>{
    dragArea.classList.remove("active");
    dragText.textContent="Drag and Drop";

})