const fileSelect = document.getElementById("fileSelect"),
 fileElem = document.getElementById("fileElem"),
 fileList = document.getElementById("fileList");

fileSelect.addEventListener("click", function(e) {
 if (fileElem) {
   fileElem.click();
 }
 e.preventDefault(); 
}, false);

fileElem.addEventListener("change", handleFiles, false);

function handleFiles() {
 if (!this.files.length) {} else {
   const list = document.createElement("ul");
   fileList.appendChild(list);
   for (let i = 0; i < this.files.length; i++) {
     const li = document.createElement("li");
     list.appendChild(li);
     const imgContainer = document.getElementById("image-container")
     const imgContainer2 = document.getElementById("image-container2")
     const img = document.createElement("img");
     img.src = URL.createObjectURL(this.files[i]);

     imgContainer.style.backgroundImage = `url("${img.src}")`;
     

     imgContainer2.innerHTML = `<img width='2px' height='2px' 
     src='${img.src}'/>`;

     fileElem.addEventListener("click", hide());

     function hide() {
       document.getElementById('input-container').style.display = 'none';
     }

   }
 }
}