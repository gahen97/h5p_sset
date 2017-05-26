const EXTRA_WIDTH = 30;

function resizeIframe() {
  var obj         = document.getElementById("exercise");
  var contentBody = obj.contentWindow.document.body;

  obj.style.height        = contentBody.scrollHeight + 'px';
  obj.style["min-width"]  = (contentBody.scrollWidth + EXTRA_WIDTH) + 'px';
}
