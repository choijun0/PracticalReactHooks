import React, { useState, useEffect, useRef } from "react";
import ReactDom from "react-dom";
import defaultAxious from "axios";

const useAxios = (opts, axiosInstance = defaultAxious) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });
  if (!opts.url) return;
  const [trigger, setTrigger] = useState(0);
  const reFetch = () => {
    setState({ ...state, loading: true }); //get back to loading state
    setTrigger(Date.now());
  };
  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);
  return { ...state, reFetch };
};

const App = () => {
  const { loading, error, data, reFetch } = useAxios({
    url: "yts.am/api/v2/list_movies.json"
  });

  console.log(
    `loading : ${loading}\n error : ${error}\n data : ${JSON.stringify(data)}`
  );
  return (
    <div>
      <div>{loading && "Loading"}</div>
      <div>{data && data.status}</div>
      <button onClick={reFetch}>reFetch</button>
    </div>
  );
};

export default App;
