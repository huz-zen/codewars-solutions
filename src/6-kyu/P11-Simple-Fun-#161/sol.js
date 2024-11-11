
function replaceDashesAsOne(str) {
  //coding and coding..
  rex = /-+\s*-+/g
   str =str.replace(rex,'-')
  str =str.replace(rex,'-')
  return str.replace(rex,'-')
}