let dropArea = document.getElementById('dropzone');

function dragOverHandler(e) {
    console.log("you looking for me?");
    e.preventDefault();
}

function dropHandler(e) {
    console.log("the file was dropped");
    e.preventDefault();
}
