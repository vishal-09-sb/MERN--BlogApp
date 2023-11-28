import mongoose from 'mongoose'


export const Connection = (username, password) => {

    const URL = `mongodb://${username}:${password}@ac-drcsgl6-shard-00-00.g74vntr.mongodb.net:27017,ac-drcsgl6-shard-00-01.g74vntr.mongodb.net:27017,ac-drcsgl6-shard-00-02.g74vntr.mongodb.net:27017/?ssl=true&replicaSet=atlas-ilxiyk-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{

        mongoose.connect(URL, { useNewUrlParser:  true });
        console.log('db connected');

    }catch (error) {
        console.log('db not connected', error);

    }
}

export default Connection;

