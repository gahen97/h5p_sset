function resizeIframe() {
  obj = document.getElementById("exercise");
  obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
}
