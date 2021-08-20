import { stock } from '../Db/stock';

export const stockManager = ()=>{

    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            resolve (stock)
        }, 2000)
    })
}