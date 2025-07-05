const terminalInput = document.getElementById('terminalInput');
const terminalOutput = document.getElementById('terminalOutput');
const clock = document.getElementById('clock');
const cpu = document.getElementById('cpu');
const mem = document.getElementById('mem');
const disk = document.getElementById('disk');

terminalInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const command = terminalInput.value.trim();
    simulateCommand(command); // 
    terminalInput.value = '';
  }
});

setInterval(() => {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();

  // Fake system stats
  cpu.textContent = `${Math.floor(Math.random() * 100)}%`;
  mem.textContent = `${Math.floor(Math.random() * 100)}%`;
  disk.textContent = `${(Math.random() * 100).toFixed(2)} MB/s`;
}, 1000);

function simulateCommand(cmd) {
  const responses = {
   help: `Available commands:
  - help
  - about
  - clear
  - hack 
  - scan
  - whoami
  - status
  - ipconfig
  - download
  - shutdown`,

    about: `CyberX Terminal
Created by noname
For educational and entertainment purposes.`,

    clear: "__CLEAR__",

    hack: "__HACKING__",

    scan: `[+] Scanning local network...
- 192.168.0.1 - Active
- 192.168.0.10 - Active
- 192.168.0.50 - Inactive
[+] Scan complete.`,

    whoami: `User: root
Access Level: Administrator
Location: Unknown`,

    status: `[+] CPU: ${Math.floor(Math.random()*100)}%
[+] Memory: ${Math.floor(Math.random()*100)}%
[+] Disk: ${Math.floor(Math.random()*100)}%
[+] Uptime: ${Math.floor(Math.random()*24)} hrs`,

    ipconfig: `IPv4 Address: 192.168.0.105
Subnet Mask: 255.255.255.0
Default Gateway: 192.168.0.1`,

    download: `[+] Connecting to server...
[+] File found: secrets.zip
[+] Downloading... |||||||||||||||||||| 100%
[+] Download complete.`,

    shutdown: `WARNING: System will shut down in 5 seconds...`
  };

  let response = responses[cmd.toLowerCase()] || `Command not found: ${cmd}`;


   //  Agar apna hisaab se details dalna chahte hain to yahn par apne hisaab se details dalain
  if (response === "__HACKING__") {
    const steps = [
      "[+] Target acquired: 1.187.255.255",
      "[+] Sending payload...",
      "[+] Establishing reverse shell...",
      "[+] Uploading virus...",
      "[+] Disabling firewall...",
      "[+] Hack complete!",
      "[+] User: Abc",
      "[+] Collecting more info & data...",
      "[+] Device name: Poco f7",
      "[+] Device OS: Android 15",
      "[+] Storage Info: 128GB - DATA COLLECTED SUCCESSFULLY !!",
      "[+] RAM Info: 12GB",
      "[+] Device type: Android",
      "[+] Device location: ----",
      "[+] Device IP:IP66.187.255",
      "[+] Targeted by: Discord",
      "[+] Targeted User name: AbcUser",
      "[+] Display name: AbcUserDisplay",
      "[+] pronoun: he/him",
      "[+] nationality: Pakistani",
      "[+] age: 17",
      "[+] Birthdate: 2006-08-10",
   
      
    ];

    let index = 0;
    terminalOutput.textContent += `\nroot@cyberx:~# ${cmd}`;
    const interval = setInterval(() => {
      if (index < steps.length) {
        terminalOutput.textContent += `\n${steps[index++]}`;
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return;
  }

  if (response === "__CLEAR__") {
    terminalOutput.textContent = '';
  } else {
    terminalOutput.textContent += `\nroot@cyberx:~# ${cmd}\n${response}`;
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }
}


