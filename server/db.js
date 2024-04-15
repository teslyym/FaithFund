import mongoose from 'mongoose';

const connectdb = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGO_URI}`);
        console.log(`I did what i did ${conn.connection.host}`)
    } catch (error) {
        console.log(`I did something ${error.message}`);
        process.exit();

    };
}
export default connectdb;
