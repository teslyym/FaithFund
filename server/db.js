const mongoose = require('mongoose');

const connectdb = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGO_URI}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`I did what i did ${conn.connection.host}`)
    } catch (error) {
        console.log(`I did something ${error.message}`);
        process.exit();

    };
}
module.exports = connectdb;
