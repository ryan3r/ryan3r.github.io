(function() {
    // Super lazy has for tag coloring
    var COLORS = ["#f00", "#0f0", "#00f", "#0ff", "#000", "#f0f", "#f80"];
    var WHITE_TEXT = ["#000", "#f00", "#00f"];

    function color(tag) {
        var hash = 0;
        for(var i = 0; i < tag.length; ++i) {
            hash ^= tag.charCodeAt(i);
        }
        return COLORS[hash % COLORS.length];
    }

    // Color the tags
    var tags = document.getElementsByClassName("tag");

    for(var i = 0; i < tags.length; ++i) {
        var style = tags[i].style;
        let bg = style.backgroundColor = color(tags[i].innerText);

        if(WHITE_TEXT.indexOf(bg) !== -1) {
            style.color = "#fff";
        }
    }

    // Sidebar toggle button
    let btns = document.getElementsByClassName("sidebar-btn");

    for(var i = 0; i < btns.length; ++i) {
        btns[i].addEventListener("click", function () {
            document.body.classList.toggle("open");
        });
    }

    let shadow = document.getElementsByClassName("shadow");

    for(var i = 0; i < btns.length; ++i) {
        shadow[i].addEventListener("click", function () {
            document.body.classList.toggle("open");
        });
    }

    // Show edit links
    if(window.localStorage && window.localStorage.showEditLinks) {
        document.body.classList.add("editor");
    }

    // Make the footer
    let footer = document.createElement("footer");
    document.body.appendChild(footer);

    if(window.localStorage) {
        let editLink = document.createElement("a");
        editLink.href = "#";
        editLink.innerText = window.localStorage.showEditLinks ? "Disable editing" : "Enable editing";
        footer.appendChild(editLink);

        editLink.addEventListener("click", function(e) {
            e.preventDefault();
            if(window.localStorage.showEditLinks) {
                window.localStorage.removeItem("showEditLinks");
            } else {
                window.localStorage.showEditLinks = "yes";
            }

            document.body.classList.toggle("editor");
            editLink.innerText = window.localStorage.showEditLinks ? "Disable editing" : "Enable editing";
        });
    }
}());