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
  /*.m-2 .card.overflow-hidden.mb-3 .more-content.more-content-gradient.overflow-hidden .player-card-padding .player_overview-grid .player-card-description.gray-900   (Not working)*/
  for(let i=0;i<bowler.length;i++)
  {
    let bowlerRow=searchTool(bowler[i]);
    let col=searchTool(bowlerRow).find("td");
    let name=searchTool(col[0]).text();
    let wicket=searchTool(col[4]).text();
    console.log(name," ",wicket);
  }


}
console.log("After");