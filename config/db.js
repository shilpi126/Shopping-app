import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        
        console.log(`Connected To Mongodb Database ${conn.connection.host}`.bgMagenta.black);
        

    }catch (error) {
        
        console.log(`Error in mongoose ${error}`.bgRed.white);
        
}

}


export default connectDB;