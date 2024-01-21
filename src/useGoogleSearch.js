import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "0003b9adcd0774823";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      // this key and cky is made to get more number of searches during development
      const key = 'AIzaSyBl4wZzrh4j__OqkpgiVG4yPf1tjGXBtUY' || API_KEY
      const cky = CONTEXT_KEY || '017576662512468239146'
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  }, [term]);
  return { data };
};
export default useGoogleSearch;
