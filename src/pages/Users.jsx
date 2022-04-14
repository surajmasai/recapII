import React, { useState, useEffect } from "react";

export const Users = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then(d => d.json())
      .then((res) => setData(res))
  }, [])

  // console.log(data)

  return (
    <>
      <h1>this is a Users page</h1>

      {
        data.map((e) => {
          return (
            <>
              <p>{e.name}</p>
              <hr />
            </>
          )
        })
      }
    </>
  );
};
