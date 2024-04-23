import { validateJSONToken } from "../util/auth";

export default async function handler(req, res) {
    if(req.method==='POST') {
        const {token} = req.body;
        if(!token) {
            res.status(400).json({ message:"Invalid user."})
        }
        try {
            const result = await validateJSONToken(token)      
            res.status(200).json({message:result})
        }catch(err) {
            res.status(401).json({message: 'Invalid User'})
        }
        
    }
}