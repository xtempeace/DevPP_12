let request=require("request");
let cheerio=require("cheerio");
let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/ball-by-ball-commentary";
request(url,cb);
function cb(error,response,html)
{
  if(error)
  {
    console.log("error:".error);
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
  let elemRepArr=searchTool(".match-comment-wrapper .match-comment-long-text");
  console.log("elemRepArr",elemRepArr.length);
  let elemRep=searchTool(elemRepArr[0]);
  let content=elemRep.text();
  console.log(content);
  


}
console.log("After");