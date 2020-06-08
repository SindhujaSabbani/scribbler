function editButtonClick() {
    var postTitle = document.getElementById('post-title');
    var postText = document.getElementById('post-text');
    var textEdit = document.getElementById('text-edit');
    var textSave = document.getElementById('text-save');

    if (postTitle.contentEditable != "true") {
        postTitle.contentEditable = "true";
        postText.contentEditable = "true";

        postTitle.classList.add("border-crimson");
        postText.classList.add("border-crimson");

        textEdit.classList.add("hidden");
        textSave.classList.remove("hidden");
    } else {
        postTitle.contentEditable = "false";
        postText.contentEditable = "false";

        postTitle.classList.remove("border-crimson");
        postText.classList.remove("border-crimson");

        textEdit.classList.remove("hidden");
        textSave.classList.add("hidden");
    }
}

function addComments(id) {
    var addEventName = id.value + '<br>';
    var a = document.getElementById('userComments');
    document.getElementById('addEventNames').innerHTML += '<p>' + addEventName + '</p>';
    a.value = a.defaultValue;
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

