let request=require("request");
let cheerio=require("cheerio");
request("https://www.npmjs.com/package/cheerio",cb);
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
  else{
    dataExtractor(html);
  }
}
function dataExtractor(html)
{
  let searchTool=cheerio.load(html);
  console.log("searchTool:",searchTool);
  let elemRep=searchTool("#readme>h1");
  console.log("elemRep:",elemRep);
  let moduleName=elemRep.text().trim();
  console.log("moduleName: ",moduleName);


}
console.log("After");