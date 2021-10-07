import { connection } from "../../connection"

export default async function insertStudant(
    id: string,
    name: string, 
    email: string, 
    data: number,      
    
    ) {
    
    await connection.insert({
        id,
        name, 
        email, 
        data,    
    }).into('system6_studants')
}