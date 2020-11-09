

const { rejects } = require('assert');
const fs=require('fs');
const { resolve } = require('path');
const colors=require('colors');

const listarTabla=(base,limite=10)=>{
    return new Promise ((res,rej)=>{
        if(!Number(base) || !Number(limite))
        {
            rej(`No se cumplen los parametros`);
        }
        else{
            let tabla='';
            for (let i = 1; i <=limite; i++) {
                tabla+=`${base} * ${i} = ${base*i}\n`
             }
            
             res(tabla);
             
        }
    })

}

 const multiplicar = (base,limite=10)=>{
     
     return new Promise ((res, rej)=>{
        if(!Number(base)||base==0)
        {
            rej(`El valor introducido ${base} es una letra o un 0`);
        }
        else{
            let tabla ='';
        
            for (let i = 1; i <=limite; i++) {
               tabla+=`${base} * ${i} = ${base*i}\n`
            }
                fileHandler= fs.writeFile(`tablas/tabla-${base}.txt`,tabla,(err)=>{
                    if(err){
                        
                        rej(err)
                    } 
        
                    else{
                       res(`tabla-${base}.txt`);
                    }
                   
                })     
            
        }
            

    })
    }



module.exports={
    multiplicar,
    listarTabla
}