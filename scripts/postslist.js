// holder for deleted post
var postToDelete;

// When post trash icon is clicked
function trashClick(e) {
    postToDelete = e.parentNode.parentNode.parentNode;
    //alert(postToDelete);
    var modalPostDelete = document.getElementById("modal-post-delete");
    modalPostDelete.style.display = "block";
}

// When Yes button of delete-post modal is clicked
function yesClick() {
    postToDelete.remove();
    postToDelete = null;
    var modalPostDelete = document.getElementById("modal-post-delete");
    modalPostDelete.style.display = "none";
}

// When No button of delete-post modal is clicked
function noClick() {
    var modalPostDelete = document.getElementById("modal-post-delete");
    modalPostDelete.style.display = "none";
    postToDelete = null;
}