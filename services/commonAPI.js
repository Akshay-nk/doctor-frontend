import axios from 'axios'


export const commonAPI = async(httpRequest,url,reqBody,reqHeader)=>{
    const reqConfig={
        method:httpRequest,
        url,
        data:reqBody,
        headers:reqHeader?reqHeader:{"Content-Type":"application/json"}
    }
    console.log(reqConfig);

    return await axios(reqConfig).then(
        (result)=>{
            return result
            }
    ).catch((err)=>{
          return err
        
    })

}

export const BOOKAPI = async(httpRequest,url,reqHeader)=>{
    const reqConfig={
        method:httpRequest,
        url,
        
        headers:reqHeader?reqHeader:{"Content-Type":"application/json"}
    }
    console.log(reqConfig);

    return await axios(reqConfig).then(
        (result)=>{
            return result
            }
    ).catch((err)=>{
          return err
        
    })

}

