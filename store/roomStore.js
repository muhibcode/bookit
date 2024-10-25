import create from "zustand";

const useRoomStore = create((set) => ({
  count: 0,
  rom: [],
  filterdRoom: [],
  increasePopulation: () =>
    set((state) => ({
      count: state.count + 1,
    })),

  setRooms: (vals) => set((state) => ({ rom: [...state.rom, vals] })),
  setFilter: () =>
    set((state) => ({
      filterdRoom: state.filterdRoom.filter(
        (val) => val["_id"] === "6268a3f380f9587932f05c11"
      ),
    })),
}));

export default useRoomStore;
