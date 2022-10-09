function getdata(id){
    return new Promise((resolve,reject)=>{
        if(id>0)
            resolve("data found = "+id)
        else 
            reject("data not found.")
    })
}
getdata(1)
.then((res)=>{console.log("res",res)})
return getdata(-2)
.then((response)=>{console.log("res",response)})
.catch((e)=>{
console.log("e",e)
})