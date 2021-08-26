let request=require("request");
let cheerio=require("cheerio");
let obj=require("C:\\Users\\Singh\\Desktop\\DevPP_12\\Js\\Module2 webscrapping\\Activity\\gitActivity\\dircreate.js");
//It print the issue
function nextNextPageCall(toolNextPageLink,j,topicName,repoName)
{
  // console.log(toolNextPageLink,j,topicName,repoName.trim());
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
    let issuePageLink=searchTool("#issues-tab");
    let halfLinkIssuePage=searchTool(issuePageLink).attr("href");
    let compLinkIssuePage="https://github.com"+halfLinkIssuePage;
    // console.log(compLinkIssuePage)
    request(compLinkIssuePage,cbIssue);
    function cbIssue(error,response,html)
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
        issuePageDataExtractor(html);
      }
    }

    function issuePageDataExtractor(html)
    {
      let searchTool=cheerio.load(html);
      let arrIssue=searchTool(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title");
      for(let i=0;i<arrIssue.length;i++)
      {
        let issue=searchTool(arrIssue[i]).attr("href");
        // console.log(issue)
        obj.saveInfo(issue,j,topicName,repoName.trim());
      }
    }
  }
  
}

module.exports={
  nextNextPageCall:nextNextPageCall
}
