function dragElement(elmnt) {
  const header = elmnt.querySelector('.panel-header');
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  if (!header) return;

  header.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Initialize draggable panels on DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.draggable').forEach(panel => {
    dragElement(panel);
  });
});



