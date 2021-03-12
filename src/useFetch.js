import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const AbortCont = new AbortController();

    fetch(url, { signal: AbortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setError(null);
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Abort");
        } else {
          setIsLoading(false);
          setError(err.message);
        }
      });
    return () => AbortCont.abort();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
