const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

//Archirecture of os
console.log("Archirecture", os.arch());

//Os platform
console.log("Platform", os.platform());

//free memory in bytes
console.log("Free memory", os.freemem());

//total memory in bytes
console.log("Total memory", os.totalmem());

//to get cpu info
console.log("Cpu info ", os.cpus());

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
