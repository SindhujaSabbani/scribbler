function editButtonClick() {
    var postTitle = document.getElementById('post-title');
    var postText = document.getElementById('post-text');
    var btnText = document.getElementById('btn-text');


    if (postTitle.contentEditable != "true") {
        postTitle.contentEditable = "true";
        postText.contentEditable = "true";

        postTitle.classList.add("border-crimson");
        postText.classList.add("border-crimson");

        btnText.innerHTML = 'Save <i class="fa fa-floppy-o" id="btn-icon"></i>';
    } else {
        postTitle.contentEditable = "false";
        postText.contentEditable = "false";

        postTitle.classList.remove("border-crimson");
        postText.classList.remove("border-crimson");

        btnText.innerHTML = 'Edit <i class="fa fa-pencil-square-o" id="btn-icon"></i>';
    }
}

function addComment() {
    var edtComment = document.getElementById('edt-comment');
    var commentText = edtComment.value;
    if (commentText != "") {
        var commentList = document.getElementById('comment-list');
        var newDiv = document.createElement("div");
        newDiv.classList.add("comment-text");
        var newContent = document.createTextNode(commentText);
        newDiv.appendChild(newContent);
        commentList.insertAdjacentElement('afterbegin', newDiv);
        edtComment.value = edtComment.defaultValue;
    }
}

var numberOfClicks = 0;

function postLiked() {
    numberOfClicks += 1;
    if (numberOfClicks != 0) {
        var likeText = document.getElementById("btn-like-text");
        likeText.innerHTML = "Liked!";
        var likeTip = document.getElementById("like-tip");
        if (numberOfClicks == 1) {
            likeTip.innerHTML = numberOfClicks + " person likes this!";
        } else {
            likeTip.innerHTML = numberOfClicks + " people have liked this!";
        }
    }
}

