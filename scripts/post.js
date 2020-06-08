// When the user clicks edit button
function editButtonClick() {
    var postTitle = document.getElementById('post-title');
    var postText = document.getElementById('post-text');
    var btnText = document.getElementById('btn-text');


    if (postTitle.contentEditable != "true") {
        // make content editable
        postTitle.contentEditable = "true";
        postText.contentEditable = "true";

        // add border to editable content
        postTitle.classList.add("border-crimson");
        postText.classList.add("border-crimson");

        // change the edit button text to save
        btnText.innerHTML = 'Save <i class="fa fa-floppy-o" id="btn-icon"></i>';
    } else {
        // make content non editable
        postTitle.contentEditable = "false";
        postText.contentEditable = "false";

        // remove the border
        postTitle.classList.remove("border-crimson");
        postText.classList.remove("border-crimson");

        // change the edit button text back to edit.
        btnText.innerHTML = 'Edit <i class="fa fa-pencil-square-o" id="btn-icon"></i>';
    }
}

// When the user click comment button
function addComment() {
    // get new comment text
    var edtComment = document.getElementById('edt-comment');
    var commentText = edtComment.value;

    if (commentText != "") {
        var commentList = document.getElementById('comment-list');

        // create div element for new comment
        var newDiv = document.createElement("div");
        newDiv.classList.add("comment-text");
        var newContent = document.createTextNode(commentText);
        newDiv.appendChild(newContent);

        // add the new comment element to the comment list
        commentList.insertAdjacentElement('afterbegin', newDiv);

        // clear comment text
        edtComment.value = edtComment.defaultValue;
    }
}

var numberOfClicks = 0;

// When the user clicks like button
function postLiked() {
    numberOfClicks += 1;
    if (numberOfClicks != 0) {
        var likeText = document.getElementById("btn-like-text");
        likeText.innerHTML = "&nbsp;Liked";
        var likeTip = document.getElementById("like-tip");
        if (numberOfClicks == 1) {
            likeTip.innerHTML = numberOfClicks + " person likes this!";
        } else {
            likeTip.innerHTML = numberOfClicks + " people have liked this!";
        }
    }
}

