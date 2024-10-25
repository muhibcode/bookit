import { atom, useAtom, useAtomValue } from "jotai";
import { useRouter } from "next/router";
import { useHydrateAtoms } from "jotai/utils";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import useRoomStore from "../store/roomStore";

export default function Home({ data: { data } }) {
  const { rom, setFilter, filterdRoom, setRooms } = useRoomStore();

  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    setRooms(data);
  }, []);

  const selectionRange = {
    startDate,
    endDate,
    // key: "selection",
  };
  // console.log(filterdRoom);
  const handleSelect = ({ range1 }) => {
    // console.log(range1);
    const { startDate, endDate } = range1;
    setStartDate(startDate);
    setEndDate(endDate);
  };
  const router = useRouter();

  const search = () =>
    router.push({
      pathname: "/search",
      query: {
        startDate,
        endDate,
        searchInput,
      },
    });

  // createCanvas(400,400)

  // console.log(filteredRooms);

  return (
    <header className="sticky bg-transparent top-0 p-5 shadow-md grid grid-cols-3 md:px-10">
      <div className="relative flex items-center">Let build bookit</div>

      <div className="md:border-2 py-2 flex items-center rounded-full shadow-md ">
        <input
          className="flex-grow outline-none pl-3 bg-transparent placeholder-gray-400"
          type="text"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          placeholder="Seacrh for Vacation"
        />
        <SearchIcon className="hidden h-9 md:inline-flex rounded-full bg-red-400 text-white p-2 cursor-pointer md:mx-2" />
      </div>

      <div className=" flex justify-end items-center space-x-4 text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a Host</p>
        <GlobeAltIcon className="h-8 cursor-pointer" />
        <div className="flex items-center border-2 rounded-full space-x-2 p-2">
          <MenuIcon className="h-8" />
          <UserCircleIcon className="h-8" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            // weekStartsOn={}
            minDate={new Date()}
            onChange={handleSelect}
            ranges={[selectionRange]}
            rangeColors={["#FD5B61"]}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-xl font-semibold bold flex-grow">
              Number Of Guests
            </h2>
            <UsersIcon className=" h-5" />
            <input
              min={1}
              type="number"
              className="pl-2 w-12 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button
              onClick={() => {
                setSearchInput("");
              }}
              className="flex-grow text-gray-500"
            >
              Cancel
            </button>
            <button className="flex-grow text-red-400">Search</button>
          </div>
        </div>
      )}
      {/* <button onClick={setFilter}>Butt</button> */}
    </header>
  );
}
