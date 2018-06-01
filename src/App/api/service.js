import axios from 'axios';

export const post = (url, contentData)=>{
    return new Promise((resolve, reject)=>{
        axios.post(url, contentData).then(response=>{
            resolve(response);
        }).catch(error=>{
            reject('error');
        })
    })
}

export const put = (url, contentData)=>{
    return new Promise((resolve, reject)=>{
        axios.put(url, contentData).then(response=>{
            resolve(response);
        }).catch(error=>{
            reject('error');
        })
    })
}

export const deletes = (url)=>{
    return new Promise((resolve, reject)=>{
        axios.delete(url).then(response=>{
            resolve(response);
        }).catch(error=>{
            reject('error');
        })
    })
}