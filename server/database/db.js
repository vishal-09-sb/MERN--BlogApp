import mongoose from 'mongoose'


export const Connection = () => {

    const URL = `mongodb://mongo:mongo@ac-xzs3xrc-shard-00-00.tzawoio.mongodb.net:27017,ac-xzs3xrc-shard-00-01.tzawoio.mongodb.net:27017,ac-xzs3xrc-shard-00-02.tzawoio.mongodb.net:27017/?ssl=true&replicaSet=atlas-vg5bla-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{

        mongoose.connect(URL, { useNewUrlParser:  true });
        console.log('db connected');

    }catch (error) {
        console.log('db not connected', error);

    }
}

export default Connection;