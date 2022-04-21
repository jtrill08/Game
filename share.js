var left = (screen.width / 2) - (640 / 2);
var top = (screen.height / 2) - (380 / 2);

var shareText = encodeURIComponent("I scored " + this.score + " in Flappy Bird! Beat that! http://flappybird.playcanvas.com/ Powered by @playcanvas #webgl #html5");
var shareUrl = "https://twitter.com/intent/tweet?text=" + shareText;

var popup = window.open(shareUrl, 'name', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + 640 + ', height=' + 380 +', top=' + top + ', left=' + left);
if (window.focus && popup)
    popup.focus();