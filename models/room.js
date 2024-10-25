import mongoose from "mongoose";

const Schema = mongoose.Schema;

const roomModel = new Schema({
  name: {
    type: String,
    required: [true, "Please Enter Room Name"],
    trim: true,
    maxLength: [100, "Name not more than 100 characters"],
  },
  pricePerNight: {
    type: Number,
    required: [true, "Please Enter Price Per night"],
    // maxLength: [4, "Price not more than 4 digits"],
  },
  description: {
    type: String,
    required: [true, "Please Enter description"],
  },
  address: {
    type: String,
    required: [true, "Please Enter address"],
  },
  numOfRooms: {
    type: Number,
    required: [true, "Please Enter number of rooms"],
  },
  bookingDates: [
    {
      startDate: { type: Number, default: Date.now },

      endDate: { type: Number, default: Date.now },
    },
  ],
  roomInfo: [
    {
      numOfBeds: {
        type: Number,
        required: [true, "Please Enter number of beds in a room"],
      },
      category: {
        type: String,

        enum: {
          values: ["Single", "King", "Twins"],
          message: "Please Select correct category for room",
        },
      },
    },
  ],

  guestCapacity: {
    type: Number,
    required: [true, "Please Enter capacity of guests"],
  },
  breakfast: {
    type: Boolean,
    default: false,
  },
  airConditioned: {
    type: Boolean,
    default: false,
  },
  petsAllowed: {
    type: Boolean,
    default: false,
  },
  roomCleaning: {
    type: Boolean,
    default: false,
  },
  internet: {
    type: Boolean,
    default: false,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
    },
    {
      url: {
        type: String,
        required: true,
      },
    },
  ],

  // reviews: [
  //   {
  //     user: {
  //       type: Schema.Types.ObjectId,
  //       ref: "User",
  //       required: true,
  //     },
  //     name: {
  //       type: String,
  //       required: true,
  //     },
  //     ratings: {
  //       type: Number,
  //       required: true,
  //     },
  //     comment: {
  //       type: String,
  //       required: true,
  //     },
  //   },
  // ],
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
});

export default mongoose.models.Room || mongoose.model("Room", roomModel);
