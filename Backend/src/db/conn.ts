import mongoose  from "mongoose";
export const conn = async()=>{
    try {
         await mongoose.connect('mongodb://localhost:27017' , {dbName:'Brainly'})
         console.log("connected to mongodb")
    } catch (error) {
        console.log('error connecting to the db',error)
        
    }
 
}