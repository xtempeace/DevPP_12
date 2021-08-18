let request=require("request");
let cheerio=require("cheerio");
let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard";
console.log("Before");
request(url,cb);
function cb(error,response,html)
{
  if(error)
  {
    console.log(error);
  }
  else if(response.statusCode==404)
  {
    console.log("Page not found");
  }
  else
  {
    dataExtractor(html);
  }
}
function dataExtractor(html)
{ 
  let searchTool=cheerio.load(html);
  let tables=searchTool(".table.bowler tbody");
  let bowlers=searchTool(tables).find("tr");
  for(let i=0;i<bowlers.length;i++)
  {
    let col=searchTool(bowlers[i]).find("td");
    let aEle=searchTool(col[0]).find("a");
    let link=aEle.attr("href");
    let compLink="https://www.espncricinfo.com"+link;
    request(compLink,ncb);
  }
  
}
function ncb(error,response,html)
{
  if(error)
  {
    console.log(error);
  }
  else if(response.statusCode==404)
  {
    console.log("PAge not found.")
  }
  else
  {
    birthDay(html);
  }
}
function birthDay(html)
{
  let searchTool=cheerio.load(html);
  let arrPlayerDetail=searchTool(".player-card-description.gray-900");
  let age=searchTool(arrPlayerDetail[2]).text();
  let name=searchTool(arrPlayerDetail[0]).text();
  console.log(name," ",age);

}
console.log("after");

