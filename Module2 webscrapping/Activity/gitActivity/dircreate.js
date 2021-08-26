let request=require("request");
let cheerio=require("cheerio");
let fs=require("fs");
let path=require("path");

function saveInfo(issue,i,topicName,repoName)
{
  // console.log(issue,i,topicName,repoName)
  let mDirPath="C:\\Users\\Singh\\Desktop\\DevPP_12\\Js\\Module2 webscrapping\\Activity\\gitActivity";
  let linkDirPath=path.join(mDirPath,"Link");
  // console.log("Hello",linkDirPath);
  //it create Link Folder
  if(!fs.existsSync(linkDirPath))
  {
    fs.mkdirSync(linkDirPath);
  }
  // console.log("topicName",topicName);
  let tLinkDirPath=path.join(linkDirPath,topicName);
  if(!fs.existsSync(tLinkDirPath))
  {
    fs.mkdirSync(tLinkDirPath);
  }
  let jsonPath=path.join(tLinkDirPath,repoName+".json");
  if(!fs.existsSync(jsonPath))
  {
    let arr = []
    arr.push(issue)
    let jsonWriteAble=JSON.stringify(arr);
    fs.writeFileSync(jsonPath,jsonWriteAble);
  }
  else
  {
    let content=fs.readFileSync(jsonPath);
    let jsonData=JSON.parse(content);
    console.log(jsonData)
    console.log("---------------------------")
    jsonData.push(issue);
    let jsonWriteAble=JSON.stringify(jsonData);
    fs.writeFileSync(jsonPath,jsonWriteAble);
  }
  


}

module.exports={
  saveInfo:saveInfo
}

