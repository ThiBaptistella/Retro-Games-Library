import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create schema definition for game
const gameSchema = new Schema(
    {
        name: String,
        year: Number,
        description: String,
        picture: String,
        postDate : { type: Date, default: Date.now } // Timestamp

    }
);

//  export the schema to use it anywhere else
export default mongoose.model('Game', gameSchema);
