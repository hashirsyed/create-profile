var input =document.getElementById("upload");
var displayImage = document.getElementById("display");
var name1 = document.querySelector("#name");
var h1 = document.querySelector("#profile-heading");
var textArea = document.querySelector("#bio");
var bioParagraph = document.querySelector("#bio-p");
const button = document.querySelector("#submit-btn");

button.addEventListener("click", myFunction);
function myFunction (e){
    e.preventDefault();
    console.log(name1, h1)
    h1.innerHTML=name1.value;
    bioParagraph.innerHTML=textArea.value;
}
input.addEventListener("change", function (e) {
    const selectedFile = input.files[0];
    console.log(e);
    console.log(URL.createObjectURL(selectedFile));
    displayImage.setAttribute("src", URL.createObjectURL(selectedFile));
});