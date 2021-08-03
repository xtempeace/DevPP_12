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
//chech idx of n and b and remove higher idx element fromn option
if((option.includes('-n'))&&(option.includes('-b')))
{
  
  let idxn=option.indexOf("-n");
  

  let idxb=option.indexOf("-b");
  
  let idxMax=Math.max(idxn,idxb);
 
  option.splice(idxMax,1);
  
}

let content="";
for(let i=0;i<option.length;i++)
{
  if(option.length==1)
  {
    switch(option[i])
    {
      case "-s":
          content=fpath(filePath);
          if(content==undefined)
          {
            return;
          }
          content=s(content);
          console.log("s: ",content);
          break; 
      case "-n":
        content=fpath(filePath);
        if(content==undefined)
        {
          return;
        }
        content=s(content);
        console.log("s ",content);
        content=n(content);
        console.log("n ",content);
        break;
      case "-b":
        content=fpath(filePath);
        if(content==undefined)
        {
          return;
        }
        content=s(content);
        console.log("s ",content);
        
        content=b(content);
        console.log("b ",content);
        break;
    }


  }
  else
  {

    switch(option[i])
    {
        
        case "-s":
              content=fpath(filePath);
              if(content==undefined)
              {
                return;
              }
              content=s(content);
              console.log("s: ",content);
              break;
        case "-n":
              content=n(content);
              console.log("n ",content);
        case "-b":
              content=b(content);
              console.log("b ",content);  
    }
      
  }

}

//File path exist or not and appending the content of the files
function fpath(filePath)
{
  let fpathcontent="";
  for(let i=0;i<filePath.length;i++)
  {
    if(fs.existsSync(filePath[i]))
    {
      let pat=path.join(filePath[i]);
      
      fpathcontent=fpathcontent+fs.readFileSync(pat)+"\r\n";
    }
    else
    {
      console.log("file does not exist error");return;
    }
  }
  return fpathcontent;
}
//For    -s   option
function s(scontent)
{
  let spliArr=scontent.split("\r\n");
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
  let sAns=temp.join("\n");
  //console.log(sAns);
  return sAns;
}
//For    -n   option
function n(sAns)
{
  let spliArr=sAns.split("\n");
  console.log(spliArr);
  for(let i=0;i<spliArr.length;i++)
  {
    let j=i+1;
    spliArr[i]=j+" "+spliArr[i];

  }
  let nAns=spliArr.join("\n");
  //console.log(nAns);
  return nAns;
}
//For -b     option
function b(sAns)
{
  let spliArr=sAns.split("\n");
  let count=1;
  for(let i=0;i<spliArr.length;i++)
  {
    if(spliArr[i].length!=0)
    {
      spliArr[i]=count+" "+spliArr[i];
      count++;
    }
  }
  bAns=spliArr.join("\n");
  //console.log(bAns);
  return bAns;
}