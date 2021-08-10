let request=require("request");
let cheerio=require("cheerio");
let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-qualifier-1-1237177/full-scorecard";
request(url,cb);
function cb(error,response,html)
{
  if(error)
  {
    console.log(error);
  }
  else if(response.statuscode==404)
  {
    console.log("Page not found");
  }
  else
  {
    getPlayerDetail(html);
  }
}
function getPlayerDetail(html)
{
  let searchTool=cheerio.load(html);
  let arrBox=searchTool(".header-title.label");
  let arrTable=searchTool("table.batsman tbody");
  for(let i=0;i<2;i++)
  {
    let temp=searchTool(arrBox[i]).text();
    console.log(temp);
    let arrPTable=searchTool(arrTable[i]);
    let arrRowPTable=arrPTable.find("tr");
    for(let i=0;i<arrRowPTable.length;i++)
    {
      let col=searchTool(arrRowPTable[i]).find("td");
      let a=searchTool(col[0]).find("a");
      let content=a.text();
      console.log(content);
    }
  }


}

