var postToDelete;

function trashClick(e) {
    postToDelete = e.parentNode.parentNode.parentNode;
    //alert(postToDelete);
    var modalPostDelete = document.getElementById("modal-post-delete");
    modalPostDelete.style.display = "block";
}


function noClick() {
    var modalPostDelete = document.getElementById("modal-post-delete");
    modalPostDelete.style.display = "none";
    postToDelete = null;
}

function yesClick() {
    postToDelete.remove();
    postToDelete = null;
    var modalPostDelete = document.getElementById("modal-post-delete");
    modalPostDelete.style.display = "none";
}

function ellipsisClick() {

}