
import { Request, Response } from "express";
import insertStudant from "../data/insertStudant";

export default async function createStudant(
    req:Request,
    res:Response
    ){
        try{
             //validar entradas da requisição
            if(
                !req.body.name ||
                !req.body.email ||
                !req.body.data 
                
            ){res.status(400).send('Preencha todos os campos')}
            
            //consultar o banco de dados
            const id: string = Date.now() + Math.random().toString()
            
            await insertStudant(
                id,
                req.body.name, 
                req.body.email, 
                req.body.data, 
            )

             
            //responder a requisição
            res
            .status(400)
            .send('Studant created!')
            
        } catch (error){
            res.status(400).send({
                message: error.message || error.sqlMessage
            })
        }
}