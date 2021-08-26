let request=require("request");
let cheerio=require("cheerio");
let obj=require("C:\\Users\\Singh\\Desktop\\DevPP_12\\Js\\Module2 webscrapping\\Activity\\gitActivity\\issue.js");
function nextPageCall(toolNextPageLink,j,topicName)
{
  // console.log(toolNextPageLink, j, topicName)
  request(toolNextPageLink,cb);
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
      dataExtractor(html);
    }
  }
  function dataExtractor(html)
  {
    let searchTool=cheerio.load(html);
    let arrFirstEightRepoLink=searchTool('.f3.color-text-secondary.text-normal.lh-condensed a[data-ga-click="Explore, go to repository, location:explore feed"]');

    //console.log("2");
    for(let i=0;i<8;i++)
    {
      let halfRepoLink=searchTool(arrFirstEightRepoLink[i]).attr("href");
      let compRepoLink="https://github.com"+halfRepoLink;
      let repoName=searchTool(arrFirstEightRepoLink[i]).text();
      //console.log(compRepoLink);
      obj.nextNextPageCall(compRepoLink,j,topicName,repoName);
    }
  } 
}

module.exports={
  nextPageCall:nextPageCall
}