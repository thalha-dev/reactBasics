import React, { useState, useEffect, useCallback } from "react";
const useFetch = (url, initialValue) => {
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }, [url]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return { loading, data };
};

function EffectCustomHook() {
  const { loading, data } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/"
  );
  return (
    <div className="App">
      {loading && <div className="loader" />}
      {data?.length > 0 &&
        data.map((blog) => <p key={blog.id}>{blog.title}</p>)}
    </div>
  );
}
export default EffectCustomHook;
