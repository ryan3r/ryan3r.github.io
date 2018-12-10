(function() {
    var shown = [];
    // Show tags
    function updateHash() {
        for(var i = 0; i < shown.length; ++i) {
            shown[i].style.display = "none";
        }

        shown = document.getElementsByClassName("tag-" + location.hash.substr(1));

        for(var i = 0; i < shown.length; ++i) {
            shown[i].style.display = "";
        }
    }

    updateHash();
    addEventListener("hashchange", updateHash);
}());