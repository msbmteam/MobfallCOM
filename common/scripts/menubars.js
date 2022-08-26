$(document).ready(function() {
	$("head").prepend(
    '<link rel="shortcut icon" href="common/images/mobfall-icon.png" type="image/x-icon" />'
    );
    $("body").prepend(
    '<div id="topbanner" style="background-image: url(index/Mobfall_Website-Banner-1920x250.jpg);"></div>'+
    '<nav id="topbar" data-spy="affix" data-offset-top="250">'+
        '<ul id="nav">'+
            '<a href="index.html"><li id="homeTopbar" class="menuButton">Home</li></a>'+
            '<a href="download.html"><li id="downloadTopbar" class="menuButton">Download</li></a>'+
            '<a href="donate.html"><li id="donateTopbar" class="menuButton">Donate</li></a>'+
        '</ul>'+
    '</nav>'
    );
});