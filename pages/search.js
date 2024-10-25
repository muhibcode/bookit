import { useRouter } from "next/router";

function search(props) {
  const {
    query: { searchInput },
  } = useRouter();
  //   console.log(router);
  return <div>{searchInput && <h1>we are in {searchInput}</h1>}</div>;
}

export default search;
