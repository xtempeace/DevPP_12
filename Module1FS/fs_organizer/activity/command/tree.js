let path=require("path");
let fs=require("fs");
function Fn(pat)
{
  if(pat==undefined)
  {
    pat=process.cwd();
  }
  let content=fs.readdirSync(pat);
  let mainDirName=path.basename(pat);
  console.log("└──",mainDirName);
  for(let key in content)
  {
    console.log("\t","├──",content[key]);
  }
}

module.exports={
  fn:Fn
}
