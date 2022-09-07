import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchApi = (initialData, initialUrl) => {
  //   const [data, setData] = useState([]);
  const [data, setData] = useState(initialData);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState(initialUrl);
  //   const [url, setUrl] = useState(
  //     "https://api.dictionaryapi.dev/api/v2/entries/en/hello"
  //   );

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);
        const data = result.data;
        setData(data);
        console.log(data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ data, isError, isLoading }, setUrl];
};

export default useFetchApi;
