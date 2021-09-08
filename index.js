module.exports.texttobinary = texttobinary =>
{
  var text_value = texttobinary;
  for (var i=0; i < text_value.length; i++)
{
  var e = text_value[i].charCodeAt(0);
  var s = "";
  var ans = "";
  do {
    var a = e % 2;
    e = (e - a) / 2;
s = a + s;
}while(e!=0);
while(s.length<8) {
if(s.length === 7) {
s = " 0" + s;
ans += s;
console.log(ans);
}
if(s.length === 6) {
s = " 00" + s;
ans += s;
console.log(ans);
}
if(s.length === 5) {
s = " 000" + s;
ans += s;
console.log(ans);
}
if(s.length === 4) {
s = " 0000" + s;
ans += s;
console.log(ans);
}
if(s.length === 3) {
s = " 00000" + s;
ans += s;
console.log(ans);
}
}
  }

}
