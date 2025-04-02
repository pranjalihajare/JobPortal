import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        await mongoose.connect('mongodb+srv://pranjalihajare2002:XbuMISkYwaKgdZ2S@cluster0.xhmv8.mongodb.net/jobportal-yt'
,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } );
        console.log('mongoose connected successfully');
        
    } catch (error){
       console.log(error);
       process.exit(1);

    }
}
export default connectDB;
