import Room from "../models/room";
const getAllRooms = async (req, res) => {
  const room = await Room.find();
  res.json(room);
};

const addRoom = async (req, res) => {
  const room = await Room.create(req.body);

  // room.save();

  res.json(room);
};
export { getAllRooms, addRoom };
