import Home from "../components/Home";
import axios from "axios";
import { useState } from "react";
import useRoomStore from "../store/roomStore";

export default function Index(props) {
  return <Home data={props} />;
}
function oneMonthFromNow(d) {
  var d = new Date();
  var targetMonth = d.getMonth() + 1;
  d.setMonth(targetMonth);

  console.log(targetMonth);
  if (d.getMonth() !== targetMonth % 12) {
    d.setDate(0);
    console.log(targetMonth % 12);
    // last day of previous month
  }
  console.log(d);

  return d;
}
export async function getServerSideProps() {
  const { data } = await axios.get("http://localhost:3000/api/rooms");
  // console.log(oneMonthFromNow());
  // oneMonthFromNow(new Date("2017-08-31T00:00:00Z"));

  useRoomStore.getState().setRooms(await data);

  return {
    props: { data: useRoomStore.getState().rom },
  };
}
