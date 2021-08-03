let helpObj=require("C:\\Users\\Singh\\Desktop\\DevPP_12\\Module1FS\\fs_organizer\\activity\\command\\help.js");
let treeObj=require("C:\\Users\\Singh\\Desktop\\DevPP_12\\Module1FS\\fs_organizer\\activity\\command\\tree.js");
let organizeObj=require("C:\\Users\\Singh\\Desktop\\DevPP_12\\Module1FS\\fs_organizer\\activity\\command\\organize.js");
let inputArr=process.argv.slice(2);
let name=inputArr[0];
let path=inputArr[1];
switch(name)
{
  case "tree":
    treeObj.fn(path);
    break;
  case "help":
    helpObj.fn();
    break;
  case "organize":
    organizeObj.fn(path);
   // input->node MediaDeviceInfo.js organize "C:\\Users\\Singh\\Desktop\\DevPP_12\\Module1FS\\randomFolder";
    break;
}

/*if(name=="tree")
{
  treeObj.fn(path);
}
else if(name=="organize")
{
  organizeObj.fn(path);
}
else if(name=="help")
{
  helpObj.fn(path);
}

*/
