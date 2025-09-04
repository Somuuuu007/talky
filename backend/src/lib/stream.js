import {StreamChat} from "stream-chat";
import "dotenv/config";


const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if(!apiKey || !apiSecret) {
    console.error("STREAM API KEY or STREAM API SECRET are not set");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);
// with this we can communicate with the stream application

export const upsertStreamUser = async (userData) => { 
     try {
        await streamClient.upsertUsers([userData]);
        return userData;
    } catch (error) {
        console.error("Error upserting user", error);
    }
}

export const generateStreamToken = (userId) => {
 try{
    const userIdStr = userId.toString();
    return streamClient.createToken(userIdStr);
 } catch (error) {
    console.error("Error generating stream token", error);
 }
}