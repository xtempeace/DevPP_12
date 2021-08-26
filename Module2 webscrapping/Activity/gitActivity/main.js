let request=require("request");
let cheerio=require("cheerio");
let fs=require("fs");
let obj=require("C:\\Users\\Singh\\Desktop\\DevPP_12\\Js\\Module2 webscrapping\\Activity\\gitActivity\\toolRepoLink.js");
const { fstat } = require("fs");
//main page request
// console.log("-1");
let path="C:\\Users\\Singh\\Desktop\\DevPP_12\\Js\\Module2 webscrapping\\Activity\\gitActivity\\Link";
//remove if "Link" folder existes for fresh start
if(fs.existsSync(path))
{
  fs.rmdirSync(path);
}
request("https://github.com/topics",cb);
function cb(error,response,html)
{
  if(error)
  {
    console.log("error:",error);
  }
  else if(response.statusCode==404)
  {
    console.log("Page not Found");
  }
  else
  {
    console.log("0");
    dataExtractor(html);
  }
}
//main page data extract
function dataExtractor(html)
{
  // console.log("1");
  let searchTool=cheerio.load(html);
  let toolsNextPageLinks=searchTool(".topic-box.position-relative.hover-grow.height-full.text-center.border.color-border-secondary.rounded.color-bg-primary.p-5");
  // console.log("2");
  let arrTopicName=searchTool(".f3.lh-condensed.text-center.Link--primary.mb-0.mt-1");
  // console.log("3");
  //call to every Tools Page seperately
  for(let i=1;i<=3;i++)
  {
    let toolNextPageHalfLink=searchTool(toolsNextPageLinks[i-1]).find("a").attr("href");
    let toolNextPageLink="https://github.com"+toolNextPageHalfLink;
    // // console.log(toolNextPageLink);
    let topicName=searchTool(arrTopicName[i-1]).text();
    // // console.log("firstTopicname",topicName.trim());
    obj.nextPageCall(toolNextPageLink,i-1,topicName.trim());
  }
}

