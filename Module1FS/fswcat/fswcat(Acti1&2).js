let fs=require("fs");
let path=require("path");
let inpArr=process.argv.slice(2);
let Destpat=path.join("C:\\Users\\Singh\\Desktop\\DevPP_12\\Module1FS\\fswcat","final.txt");
let content="";
for(let i=0;i<inpArr.length;i++)
{
  if(fs.existsSync(inpArr[i]))
  {
    let pat=path.join(inpArr[i]);
    
    content=content+fs.readFileSync(pat)+"\n";
    
    //fs.appendFileSync(Destpat,content+"\n");

  }
  else
  {
    console.log("file does not exist error");return;
  }
  


}

//let content=fs.readFileSync(Destpat);
console.log(content+"");
//fs.unlinkSync(Destpat);