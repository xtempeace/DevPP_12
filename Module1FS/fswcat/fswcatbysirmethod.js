let fs=require("fs");
let path=require("path");
let inpArr=process.argv.slice(2);
let option=[];
let filePath=[];
//Differentiating in option and filepath
for(let i=0;i<inpArr.length;i++)
{
  if(inpArr[i].charAt(0)=="-")
  {
    option.push(inpArr[i]);
  }
  else
  {
    filePath.push(inpArr[i]);
  }
}
//chech idx of n and b and remove higher idx element from option
if((option.includes('-n'))&&(option.includes('-b')))
{
  
  let idxn=option.indexOf("-n");
  

  let idxb=option.indexOf("-b");
  
  let idxMax=Math.max(idxn,idxb);
 
  option.splice(idxMax,1);
  
}
let content="";
//File path exist or not and appending the content of the files
  for(let i=0;i<filePath.length;i++)
  {
    if(fs.existsSync(filePath[i]))
    {
      let pat=path.join(filePath[i]);
      
      content=content+fs.readFileSync(pat)+"\r\n";
    }
    else
    {
      console.log("file does not exist error");return;
    }
  }
  

//For    -s   option
if(option.includes('-s'))
{
  let spliArr=content.split("\r\n");
  //console.log(spliArr);
  for(let i=1;i<spliArr.length;i++)
  {
    if((spliArr[i]==""&&spliArr[i-1]=="")||(spliArr[i]==""&&spliArr[i-1]=="null"))
    {
      spliArr[i]="null";
    }
  }
  let temp=[];
  for(let i=0;i<spliArr.length;i++)
  {
    if(spliArr[i]!="null")
    {
      temp.push(spliArr[i]);
    }
  }
  content=temp.join("\n");
  //console.log(sAns);
  
}
//For    -n   option
if(option.includes('-n'))
{
  let spliArr=content.split("\n");
  console.log(spliArr);
  for(let i=0;i<spliArr.length;i++)
  {
    let j=i+1;
    spliArr[i]=j+" "+spliArr[i];

  }
  content=spliArr.join("\n");
  //console.log(nAns);
  
}
//For -b     option
if(option.includes('-b'))
{
  let spliArr=content.split("\n");
  let count=1;
  for(let i=0;i<spliArr.length;i++)
  {
    if(spliArr[i].length!=0)
    {
      spliArr[i]=count+" "+spliArr[i];
      count++;
    }
  }
  content=spliArr.join("\n");
  //console.log(bAns);
  
}
console.log("content:",content);