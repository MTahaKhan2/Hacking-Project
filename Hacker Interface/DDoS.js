function dragElementDDoS(elmnt) {
  const header = elmnt.querySelector('.ddos-header');
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

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

window.addEventListener('DOMContentLoaded', () => {
  const ddosPanel = document.getElementById('ddosAttackPanel');
  if (ddosPanel) dragElementDDoS(ddosPanel);

  // Optional: simulate log updates
  const ddosStatus = document.getElementById('ddosStatus');
  if (ddosStatus) {
    let count = 0;
    setInterval(() => {
      ddosStatus.innerHTML += `<br>[+] Packet sent (${++count * 1000} bytes)`;
      ddosStatus.scrollTop = ddosStatus.scrollHeight;
    }, 1500);
  }
});
