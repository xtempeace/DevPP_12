let request=require("request");
let cheerio=require("cheerio");
let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard";
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
  let bowler=searchTool(".table.bowler tbody tr");
  for(let i=0;i<bowler.length;i++)
  {
    let col=searchTool(bowler[i]).find("td");
    let name=searchTool(col[0]).text();
    console.log("name:",name);
    let aElem=searchTool(col[0]).find("a");
    let link=aElem.attr("href");
    //console.log(link);
    let completeLink="https://www.espncricinfo.com"+link;
    console.log("Link:",link);
    request(completeLink,newcb);

  }
}
function newcb(error,response,html)
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
    getBirthDay(html);
  }
}
function getBirthDay(html)
{
  let searchTool=cheerio.load(html);
  let ageArr=searchTool(".player-card-description.gray-900");
  let age=searchTool(ageArr[2]).text();
  let name=searchTool(ageArr[0]).text();
  console.log(name+" "+age);


}

console.log("After");