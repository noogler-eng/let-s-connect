import mongoose, {Connection} from "mongoose";

let isConnected: Connection | Boolean = false;

export default async function DBConnect(){
    try{
       if(!isConnected){
            const res = await mongoose.connect(process.env.MONGO_DB_URL || "");
            isConnected = res.connection;
            console.log("mongoDb is connected")
            return isConnected;
       }else{
        console.log("mongoDb is already connected")
        return isConnected;
       }
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}
