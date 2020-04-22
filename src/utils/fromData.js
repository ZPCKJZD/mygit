export const FormData=()=>{
  let myData=new Date()
  var year=myData.getFullYear()
  var month=myData.getMonth()+1>9?myData.getMonth()+1:"0"+(myData.getMonth()+1)
  var day=myData.getDate()>9?myData.getDate():"0"+myData.getDate()
  return year+"-"+month+"-"+day
}
