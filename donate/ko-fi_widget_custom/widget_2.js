var kofiwidget2 = kofiwidget2 || (function() {
    var style = "";
    var html = "";
    var color = "";
    var text = "";
    var id = "";
    return {
        init: function(pText, pColor, pId) {
            color = pColor;
            text = pText;
            id = pId;
            html = "<link href='https://fonts.googleapis.com/css?family=Quicksand:400,700' rel='stylesheet' type='text/css'>";
            html += '<div class=btn-container><a title="Support us on ko-fi.com" class="kofi-button" style="background-color:[color];" href="https://ko-fi.com/[id]" target="_blank"> <span class="kofitext"><img src="https://storage.ko-fi.com/cdn/cup-border.png" alt="Ko-fi donations" class="kofiimg"/>[text]</span></a></div>';
        },
        getHTML: function() {
            var rtn = style + html.replace("[color]", color).replace("[text]", text).replace("[id]", id);
            return rtn;
        },
        draw: function() {
            document.writeln(style + html.replace("[color]", color).replace("[text]", text).replace("[id]", id));
        }
    };
}());