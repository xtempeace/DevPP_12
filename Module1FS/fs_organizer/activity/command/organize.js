let types={
  media:["mp4","mkv"],
  archives:['zip',"7z","rar","tar","gz","ar","iso","xz"],
  document:["docx","doc","pdf","xlsx","xls","odt","ods","odp","odg","odf","txt","ps","text"],
  app:['exe',"dmg","pkg","deb","apk"]
}
let path=require("path");
let fs=require("fs");
function fn(pat)
{
  if(pat==undefined)
  {
    pat=process.cwd();
  }
  if(pat!=undefined)     
  {
    let content=fs.readdirSync(pat);
    console.log(content);
    // let mediaDirPath=path.join(pat,"media");
    // if(!fs.existsSync(mediaDirPath))
    // {
    //   fs.mkdirSync(mediaDirPath);
    // }
    // let archivesDirPath=path.join(pat,"archives");
    // if(!fs.existsSync(archivesDirPath))
    // {
    //   fs.mkdirSync(archivesDirPath);
    // }
    // let documentDirPath=path.join(pat,"document");
    // if(!fs.existsSync(documentDirPath))
    // {
    //   fs.mkdirSync(documentDirPath);
    // }
    // let appDirPath=path.join(pat,"app");
    // if(!fs.existsSync(appDirPath))
    // {
    //   fs.mkdirSync(appDirPath);
    // }
    // let otherDirPath=path.join(pat,"other");
    // if(!fs.existsSync(otherDirPath))
    // {
    //   fs.mkdirSync(otherDirPath);
    // }
    let contSize=0;
    for(let key in content)
    {
      let fileSrcPath=path.join(pat,content[key]);
      let statsOfAPath=fs.lstatSync(fileSrcPath);
      if(statsOfAPath.isFile())
      {
        contSize++;
      }
    }
    console.log(contSize);
    for(let i=0;(i<content.length)&&(contSize!=0);i++)
    {
      let fileSrcPath=path.join(pat,content[i]);
      //console.log("fileSrcPath:",fileSrcPath);
      let statsOfAPath=fs.lstatSync(fileSrcPath);
      if(statsOfAPath.isFile())
      {
        contSize--;
        let ext=path.extname(fileSrcPath);
        ext=ext.slice(1);
        //console.log(ext);
        for(let key in types)
        {
          for(let idx in types[key])
          {
            if(types[key][idx]==ext)
            {
              let DirPath=path.join(pat,key);
              if(!fs.existsSync(DirPath))
              {
                fs.mkdirSync(DirPath);
              }
              let srcFileName=path.basename(fileSrcPath);
              let fileDestPath=path.join(pat,key,srcFileName);
              fs.copyFileSync(fileSrcPath,fileDestPath);
              fs.unlinkSync(fileSrcPath);
            }

          }
          
        }
        if(fs.existsSync(fileSrcPath))
          {
              let DirPath=path.join(pat,"other");
              if(!fs.existsSync(DirPath))
              {
                fs.mkdirSync(DirPath);
              }
            let srcFileName=path.basename(fileSrcPath);
            let fileDestPath=path.join(pat,"other",srcFileName);
            fs.copyFileSync(fileSrcPath,fileDestPath);
            fs.unlinkSync(fileSrcPath);
          }

      }

    }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // let content=fs.readdirSync(pat);
    // console.log(content);
    // let mediaDirPath=path.join(pat,"media");
    // fs.mkdirSync(mediaDirPath);
    // let archivesDirPath=path.join(pat,"archives");
    // fs.mkdirSync(archivesDirPath);
    // let documentDirPath=path.join(pat,"document");
    // fs.mkdirSync(documentDirPath);
    // let appDirPath=path.join(pat,"app");
    // fs.mkdirSync(appDirPath);
    // let otherDirPath=path.join(pat,"other");
    // fs.mkdirSync(otherDirPath);
    
    // for(let i=0;i<content.length;i++)
    // {
    //   let fileNameExt=content[i];
    //   let tempExt="";
    //   for(let i=fileNameExt.length-1;i>=0;i--)
    //   {
    //     if(fileNameExt[i]==".")
    //     {
    //       break;
    //     }
    //     else
    //     {
    //       tempExt=tempExt+fileNameExt[i];
    //     }
    //   }
    //   let ext="";
    //   for(let i=tempExt.length-1;i>=0;i--)
    //   {
    //     ext=ext+tempExt[i];

    //   }
    //   console.log(ext);
    //   let flag=0;
    //   for(let key in types)
    //   {
    //     if(flag==1)
    //     {
    //       break;
    //     }
    //     console.log("Key: ",key);
    //     for(let i=0;i<types[key].length-1;i++)
    //     {
    //       if(types[key][i]==ext)
    //       {
    //         if(key=="media")
    //         {
    //           let srcFilePath=path.join(pat,content[i]);
    //           let destDir=mediaDirPath;
    //           let toBeCopiedFileName=path.basename(srcFilePath);
    //           // console.log("toBeCopiedFileName: ",toBeCopiedFileName);
    //           let destPath=path.join(destDir,toBeCopiedFileName);
    //           fs.copyFileSync(srcFilePath,destPath);
    //           console.log("srcPath ",srcFilePath);
    //           console.log("destPath",destPath);
    //           // fs.unlinkSync(srcFilePath);
    //           flag=1;break;
    //         }
    //         else if(key=="archives")
    //         {
    //           let srcFilePath=path.join(pat,content[i]);
    //           let destDir=archivesDirPath;
    //           let toBeCopiedFileName=path.basename(srcFilePath);
    //           console.log("toBeCopiedFileName: ",toBeCopiedFileName);
    //           let destPath=path.join(destDir,toBeCopiedFileName);
    //           fs.copyFileSync(srcFilePath,destPath);
    //           console.log("srcPath ",srcFilePath);
    //           console.log("destPath",destPath);
    //           // fs.unlinkSync(srcFilePath);
    //           flag=1;break;
    //         }
    //         else if(key=="document")
    //         {
    //           let srcFilePath=path.join(pat,content[i]);
    //           let destDir=documentDirPath;
    //           let toBeCopiedFileName=path.basename(srcFilePath);
    //           console.log("toBeCopiedFileName: ",toBeCopiedFileName);
    //           let destPath=path.join(destDir,toBeCopiedFileName);
    //           fs.copyFileSync(srcFilePath,destPath);
    //           console.log("srcPath ",srcFilePath);
    //           console.log("destPath",destPath);
    //           // fs.unlinkSync(srcFilePath);
    //           flag=1;break;
    //         }
    //         else if(key=="app")
    //         {
    //           let srcFilePath=path.join(pat,content[i]);
    //           let destDir=appDirPath;
    //           let toBeCopiedFileName=path.basename(srcFilePath);
    //           console.log("toBeCopiedFileName: ",toBeCopiedFileName);
    //           let destPath=path.join(destDir,toBeCopiedFileName);
    //           fs.copyFileSync(srcFilePath,destPath);
    //           console.log("srcPath ",srcFilePath);
    //           console.log("destPath",destPath);
    //           // fs.unlinkSync(srcFilePath);
    //           flag=1;break;
    //         }
    //       }

    //     }
    //   }
    //   if(flag==0)
    //   {
    //           let srcFilePath=path.join(pat,content[i]);
    //           let destDir=otherDirPath;
    //           let toBeCopiedFileName=path.basename(srcFilePath);
    //           console.log("toBeCopiedFileName: ",toBeCopiedFileName);
    //           let destPath=path.join(destDir,toBeCopiedFileName);
    //           fs.copyFileSync(srcFilePath,destPath);
    //           console.log("srcPath ",srcFilePath);
    //           console.log("destPath",destPath);
    //           // fs.unlinkSync(srcFilePath);
              


    //   }
    // }




}

module.exports={
  fn:fn
}
