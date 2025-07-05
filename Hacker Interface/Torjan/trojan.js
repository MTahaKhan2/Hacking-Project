function simulateTrojanDeployment() {
  const trojanPanel = document.getElementById("trojanPanel");
  const logContainer = document.getElementById("trojanLogs");
  trojanPanel.style.display = "block";

  const logs = [
    "[*] Connecting to target device...",
    "[+] Connection successful.",
    "[*] Uploading trojan payload...",
    "[*] Bypassing antivirus...",
    "[+] Injection complete.",
    "[*] Creating persistence...",
    "[+] Trojan deployed successfully.",
    "[*] Monitoring remote access channel...",
    "[*] Awaiting further commands..."
  ];

  let i = 0;
  const interval = setInterval(() => {
    if (i < logs.length) {
      logContainer.innerHTML += logs[i++] + "<br>";
      logContainer.scrollTop = logContainer.scrollHeight;
    } else {
      clearInterval(interval);
    }
  }, 1500);
}
