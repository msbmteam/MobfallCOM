$(document).ready(function() {
	$("head").prepend(
        '<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />'
    );
    $("head").append(
        '<!-- Google tag (gtag.js) -->'+
        '<script async src="https://www.googletagmanager.com/gtag/js?id=G-SFQV98GZFT"></script>'+
        '<script>'+
        '  window.dataLayer = window.dataLayer || [];'+
        '  function gtag(){dataLayer.push(arguments);}'+
        "  gtag('js', new Date());"+
        "  gtag('config', 'G-SFQV98GZFT');"+
        '</script>'
    );
    $("body").prepend(
        '<div id="topbanner" style="background-image: url(index/Mobfall_Website-Banner-1920x250.jpg);"></div>'+
        '<nav id="topbar" data-spy="affix" data-offset-top="250">'+
            '<ul id="nav">'+
                '<a href="index.html"><li id="homeTopbar" class="menuButton">Home</li></a>'+
                '<a href="download.html"><li id="downloadTopbar" class="menuButton">Download</li></a>'+
                '<a href="donate.html"><li id="donateTopbar" class="menuButton">Support Us</li></a>'+
                '<!--<a href="https://my-store-bcbce3.creator-spring.com/" target="_blank"><li id="merchTopbar" class="menuButton external">Merch</li></a>-->'+
            '</ul>'+
        '</nav>'
    );
});