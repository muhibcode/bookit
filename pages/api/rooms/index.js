import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";

import { addRoom, getAllRooms } from "../../../Controller/roomController";

const handler = nc();

dbConnect();
handler.get(getAllRooms);
handler.post(addRoom);

export default handler;
