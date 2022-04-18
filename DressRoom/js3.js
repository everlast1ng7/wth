function myFunction(smallImg){
    var fullImg = document.getElementById('imageBox');
    fullImg.src = smallImg.src;
}

function onClickFunction(){
    document.getElementById('let').style.display = "none";
    document.getElementById('prod').style.display = "block";
}