(function() {
    if(window.localStorage) {
        let editLink = document.querySelector(".edit-toggle");
        editLink.innerText = window.localStorage.showEditLinks ? "Disable editing" : "Enable editing";

        editLink.addEventListener("click", function(e) {
            e.preventDefault();
            if(window.localStorage.showEditLinks) {
                window.localStorage.removeItem("showEditLinks");
            } else {
                window.localStorage.showEditLinks = "yes";
            }

            editLink.innerText = window.localStorage.showEditLinks ? "Disable editing" : "Enable editing";
        });
    }
}());