function dragTrojanPanel(elmnt) {
  const header = elmnt.querySelector('.trojan-drag-header');
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  header.onmousedown = function (e) {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDrag;
    document.onmousemove = elementDrag;
  };

  function elementDrag(e) {
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDrag() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const trojanPanel = document.getElementById("trojanDeployContainer");
  if (trojanPanel) dragTrojanPanel(trojanPanel);
});
