export const registerService = async(data)=>{
    console.log("submit data",data)
    try{
        const promiseRes = await fetch("http://localhost:8080/api/user/register",{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        const response = await promiseRes.json();
        console.log(response)
        return response;
        
    }catch(err){
        console.log(err);
    }
  
}