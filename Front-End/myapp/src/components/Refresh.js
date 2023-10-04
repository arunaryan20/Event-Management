
const fetchData=async(token)=>{
     try{
             await fetch("http://localhost:6500/get/data",{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Contect-Type":"application/json",
                    authorization:"Bearer "+token
                }
             }).then((res)=>{
                  res.json().then((data)=>{
                    return data
                  }).catch((err)=>{
                    console.log("data error---->",err)
                  })
             }).catch((err)=>{
                console.log("response error----->",err)
             })
     }catch(err){
        console.log("catch error---->",err)
     }
}
export default fetchData
