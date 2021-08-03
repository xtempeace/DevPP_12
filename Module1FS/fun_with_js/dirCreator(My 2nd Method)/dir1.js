let fs=require("fs");
let path=require("path");
let inputArr=process.argv.slice(2);
let mainDirName=inputArr[0];
let subDirArray=inputArr.slice(1);
let currPath=process.cwd();
let mainDirPath=path.join(currPath,mainDirName);
if(fs.existsSync(mainDirPath))
{
  console.log("Already exists");return;
}
else
{
  fs.mkdirSync(mainDirPath);
  for(let i=0;i<subDirArray.length;i++)
  {
    let subDirPath=path.join(mainDirPath,subDirArray[i]);
    fs.mkdirSync(subDirPath);
    for(let j=1;j<=5;j++)
    {
      let modDirPath=path.join(subDirPath,"m"+j);
      fs.mkdirSync(modDirPath);
      let filePath=path.join(modDirPath,"content.md");
      fs.writeFileSync(filePath,"Hello");
    }


  }




}




