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
}());