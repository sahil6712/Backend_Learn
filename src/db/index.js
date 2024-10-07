import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async()=>{
    try{
        let connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB Connected ! ${connectionInstance.connection.host}`)
    }
    catch(err){
        console.log('\n mongoDB Connection Failed! \n',err);
        process.exit(1);
    }
} 

export default connectDB;