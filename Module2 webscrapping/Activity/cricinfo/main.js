let request=require("request");
let cheerio=require("cheerio");
let fs=require("fs");
let path=require("path");
let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595";
request(url,mpcb);
function mpcb(error,response,html)
{
  if(error)
  {
    console.log("error");
  }
  else if(response.statusCode==404)
  {
    console.log("Page not found");
  }
  else
  {
      getSCardPageUrl(html);
  }
}
function getSCardPageUrl(html)
{
  let searchTool=cheerio.load(html);
  let vAllResult=searchTool(".widget-items.cta-link");
  let avAllResult=vAllResult.find("a");
  let urlAllresult=avAllResult.attr("href");
  let comlUrlAllresult="https://www.espncricinfo.com"+urlAllresult;
  request(comlUrlAllresult,sbpcb);
  function sbpcb(error,response,html)
  {
    if(error)
    {
      console.log("error");
    }
    else if(response.statusCode==404)
    {
      console.log("Page not found");
    }
    else
    {
        getSCardUrls(html);
    }
  }
}
function getSCardUrls(html)
{
  let searchTool=cheerio.load(html);
  let arrBox=searchTool('a[data-hover="Scorecard"]');
  for(let i=0;i<arrBox.length;i++)
  {
    
    let sBoardUrl=searchTool(arrBox[i]).attr("href");
    let comSBoardUrl="https://www.espncricinfo.com"+sBoardUrl;
    //console.log(i," ",comSBoardUrl);
    request(comSBoardUrl,sbdpcb);
    function sbdpcb(error,response,html)
    {
      if(error)
      {
        console.log("error");
      }
      else if(response.statuscode==404)
      {
        console.log("Page not found");
      }
      else
      {
        mkePlayerFile(html);
      }
    }
  }
}
function mkePlayerFile(html)
{
  let searchTool=cheerio.load(html);
  let arrBox=searchTool(".match-info.match-info-MATCH.match-info-MATCH-half-width").find("div");
  let arrDesc=(searchTool(arrBox[1]).text()).split(",");
  let venue=arrDesc[1];//
  let date=arrDesc[2];//
  //let oneBackResult=searchTool(arrBox).find(".status-textspan");//
  let oneBackResult=searchTool(".match-info.match-info-MATCH.match-info-MATCH-half-width .status-text span");
  let result=oneBackResult.text();
  let arrTeamName=searchTool(".name-link .name");
  let firstInnTeamName=searchTool(arrTeamName[0]).text();
  let secInnTeamName=searchTool(arrTeamName[1]).text();
  

  let arrTable=searchTool("table.batsman tbody");
  oinfoofplayer(venue,date,result,arrTable,html,firstInnTeamName,secInnTeamName);
}
function oinfoofplayer(venue,date,result,arrTable,html,firstInnTeamName,secInnTeamName)
{
  let myTeamName;
  let opponentTeamName;
  for(let i=0;i<2;i++)
  {
    let searchTool=cheerio.load(html);
    
    if(i==0)
    {
      myTeamName=firstInnTeamName;
      opponentTeamName=secInnTeamName;
    }
    else
    {
      myTeamName=secInnTeamName;
      opponentTeamName=firstInnTeamName;
    }
    let arrPTable=searchTool(arrTable[i]);
    let arrRowPTable=arrPTable.find("tr");
    for(let j=0;j<arrRowPTable.length-1;j++)
    {
      let arrcol=searchTool(arrRowPTable[j]).find("td");
      let name="";
      name=searchTool(arrcol[0]).find("a").text();
      if(name!="")
      {
        let runs=searchTool(arrcol[2]).text();
        let ball=searchTool(arrcol[3]).text();
        let four=searchTool(arrcol[5]).text();
        let six=searchTool(arrcol[6]).text();
        let sr=searchTool(arrcol[7]).text();
        let obj={
          "myTeamName":myTeamName,
          "name":name,
          "venue":venue,
          "date":date,
          "opponentTeamName":opponentTeamName,
          "result":result,
          "runs":runs,
          "balls":ball,
          "fours":four,
          "sixes":six,
          "sr":sr
        }
        mkePlayerJsonFile(obj);
      }

    }

  }


}
function mkePlayerJsonFile(obj)
{
  let mainDirPath=path.join("C:\\Users\\Singh\\Desktop\\DevPP_12\\Js\\Module2 webscrapping\\Activity\\cricinfo","ipl");
  let teamDirPath=path.join(mainDirPath,obj["myTeamName"]);
  let fileName=obj["name"]+".xlsx";
  let filePath=path.join(teamDirPath,fileName);
  if(!fs.existsSync(mainDirPath))
  {
    fs.mkdirSync(mainDirPath);
  }
  if(!fs.existsSync(teamDirPath))
  {
    fs.mkdirSync(teamDirPath);
  }
  
  if(fs.existsSync(filePath))
  {
    let content=fs.readFileSync(filePath);
    let jsonData=JSON.parse(content);
    jsonData.push(obj);
    let jsonWriteAble=JSON.stringify(jsonData);
    fs.writeFileSync(filePath,jsonWriteAble);
  }
  else
  {
    let arr=[];
    arr.push(obj);
    let jsonWriteAble=JSON.stringify(arr);
    fs.writeFileSync(filePath,jsonWriteAble);

  }
}










