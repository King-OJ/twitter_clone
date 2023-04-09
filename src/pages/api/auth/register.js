import clientPromise from '../../../lib/mongodb'
import { hash } from 'bcryptjs';
import { StatusCodes } from 'http-status-codes';


export default async function register(req, res) {
    const {name, email, phone, password} = req.body
    try {
        const client = await clientPromise
        const db = client.db("twitter_clone")
        
        const checkExisting = await db
            .collection('users')
            .findOne({ email: email });

        if (checkExisting) {
            res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ msg: 'User already exists' });
            return;
        }
        let user
        const createdUser = await db
            .collection('users')
            .insertOne( { name, email, phone, password: await hash(password, 12) }) 
        
        if(createdUser){
            user = await db
            .collection('users')
            .findOne({ email: email });
        }
        
        res.status(StatusCodes.CREATED).json({ msg: 'User created', user });

    } catch (error) {
        console.error(e)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Something went wrong! Try again' })
    }
    
}

    