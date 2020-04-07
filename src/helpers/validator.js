const textRegx = /[a-zA-Z]/
const eRegx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


export const validate=(value,id)=>{
   console.log(value)
   console.log(textRegx.test(value))
   if(id!== 'emailId' && !textRegx.test(value)){
        return false;
   }else if( !eRegx.test(value)){
          return false;
   }
   return true;
}

