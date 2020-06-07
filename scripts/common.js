function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elmnt.innerHTML = this.responseText;
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found.";
                    }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}


// When the user clicks on the button, open the modal
function signupClick() {
    var modalSignup = document.getElementById("modal-signup");
    modalSignup.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeSignupClick() {
    var modalSignup = document.getElementById("modal-signup");
    modalSignup.style.display = "none";
}


// When the user clicks on the button, open the modal
function signinClick() {
    var modalSignin = document.getElementById("modal-signin");
    modalSignin.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeSigninClick() {
    var modalSignin = document.getElementById("modal-signin");
    modalSignin.style.display = "none";
}

function signupLinkClick() {
    closeSigninClick();
    signupClick();
}
window.onclick = function (event) {
    var modalSignup = document.getElementById("modal-signup");
    var modalSignin = document.getElementById("modal-signin");

    if (event.target == modalSignup) {
        closeSignupClick();
    } else if (event.target == modalSignin) {
        closeSigninClick();
    }
}