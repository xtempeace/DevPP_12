var a=10;
function fn()
{
  var a=20;
  a++;
  console.log("101:",a);
  if(true)
  {
    a=30;
    a++;
    console.log("105:",a);
  }
  console.log("107:",a);
}
console.log("109:",a);
fn();
console.log("111:",a);