let fs=require("fs");
let path=require("path");
let inputArr=process.argv.slice(2);
let f1=inputArr[0];
let f2=inputArr[1];
let f3=inputArr[2];
let f4=inputArr[3];
let currentPath=process.cwd();
fs.mkdirSync(f1);

let nextnextCurrentPath1=path.join(currentPath,f1,f2);
let nextnextCurrentPath2=path.join(currentPath,f1,f3);
let nextnextCurrentPath3=path.join(currentPath,f1,f4);
fs.mkdirSync(nextnextCurrentPath1);//js
fs.mkdirSync(nextnextCurrentPath2);//browser
fs.mkdirSync(nextnextCurrentPath3);//react

let nextnextnextCurrentPath1=path.join(currentPath,f1,f2,"m1");
let nextnextnextCurrentPath2=path.join(currentPath,f1,f2,"m2");
let nextnextnextCurrentPath3=path.join(currentPath,f1,f2,"m3");
let nextnextnextCurrentPath4=path.join(currentPath,f1,f2,"m4");
let nextnextnextCurrentPath5=path.join(currentPath,f1,f2,"m5");
fs.mkdirSync(nextnextnextCurrentPath1);
fs.mkdirSync(nextnextnextCurrentPath2);
fs.mkdirSync(nextnextnextCurrentPath3);
fs.mkdirSync(nextnextnextCurrentPath4);
fs.mkdirSync(nextnextnextCurrentPath5);
nextnextnextCurrentPath1=path.join(currentPath,f1,f2,"m1","content.md");
nextnextnextCurrentPath2=path.join(currentPath,f1,f2,"m2","content.md");
nextnextnextCurrentPath3=path.join(currentPath,f1,f2,"m3","content.md");
nextnextnextCurrentPath4=path.join(currentPath,f1,f2,"m4","content.md");
nextnextnextCurrentPath5=path.join(currentPath,f1,f2,"m5","content.md");
fs.writeFileSync(nextnextnextCurrentPath1,"Hello");
fs.writeFileSync(nextnextnextCurrentPath2,"Hello");
fs.writeFileSync(nextnextnextCurrentPath3,"Hello");
fs.writeFileSync(nextnextnextCurrentPath4,"Hello");
fs.writeFileSync(nextnextnextCurrentPath5,"Hello");


nextnextnextCurrentPath1=path.join(currentPath,f1,f3,"m1");
nextnextnextCurrentPath2=path.join(currentPath,f1,f3,"m2");
nextnextnextCurrentPath3=path.join(currentPath,f1,f3,"m3");
nextnextnextCurrentPath4=path.join(currentPath,f1,f3,"m4");
nextnextnextCurrentPath5=path.join(currentPath,f1,f3,"m5");
fs.mkdirSync(nextnextnextCurrentPath1);
fs.mkdirSync(nextnextnextCurrentPath2);
fs.mkdirSync(nextnextnextCurrentPath3);
fs.mkdirSync(nextnextnextCurrentPath4);
fs.mkdirSync(nextnextnextCurrentPath5);
nextnextnextCurrentPath1=path.join(currentPath,f1,f3,"m1","content.md");
nextnextnextCurrentPath2=path.join(currentPath,f1,f3,"m2","content.md");
nextnextnextCurrentPath3=path.join(currentPath,f1,f3,"m3","content.md");
nextnextnextCurrentPath4=path.join(currentPath,f1,f3,"m4","content.md");
nextnextnextCurrentPath5=path.join(currentPath,f1,f3,"m5","content.md");
fs.writeFileSync(nextnextnextCurrentPath1,"Hello");
fs.writeFileSync(nextnextnextCurrentPath2,"Hello");
fs.writeFileSync(nextnextnextCurrentPath3,"Hello");
fs.writeFileSync(nextnextnextCurrentPath4,"Hello");
fs.writeFileSync(nextnextnextCurrentPath5,"Hello");

nextnextnextCurrentPath1=path.join(currentPath,f1,f4,"m1");
nextnextnextCurrentPath2=path.join(currentPath,f1,f4,"m2");
nextnextnextCurrentPath3=path.join(currentPath,f1,f4,"m3");
nextnextnextCurrentPath4=path.join(currentPath,f1,f4,"m4");
nextnextnextCurrentPath5=path.join(currentPath,f1,f4,"m5");
fs.mkdirSync(nextnextnextCurrentPath1);
fs.mkdirSync(nextnextnextCurrentPath2);
fs.mkdirSync(nextnextnextCurrentPath3);
fs.mkdirSync(nextnextnextCurrentPath4);
fs.mkdirSync(nextnextnextCurrentPath5);
nextnextnextCurrentPath1=path.join(currentPath,f1,f4,"m1","content.md");
nextnextnextCurrentPath2=path.join(currentPath,f1,f4,"m2","content.md");
nextnextnextCurrentPath3=path.join(currentPath,f1,f4,"m3","content.md");
nextnextnextCurrentPath4=path.join(currentPath,f1,f4,"m4","content.md");
nextnextnextCurrentPath5=path.join(currentPath,f1,f4,"m5","content.md");
fs.writeFileSync(nextnextnextCurrentPath1,"Hello");
fs.writeFileSync(nextnextnextCurrentPath2,"Hello");
fs.writeFileSync(nextnextnextCurrentPath3,"Hello");
fs.writeFileSync(nextnextnextCurrentPath4,"Hello");
fs.writeFileSync(nextnextnextCurrentPath5,"Hello");

