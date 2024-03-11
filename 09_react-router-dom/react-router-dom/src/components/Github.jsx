import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState("");
    useEffect(() => {
        fetch("https://api.github.com/users/adityapaul04")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            return setData(data);
        })
    }, [])
  return (
    <>
    <div>Github Name: {data.name}</div>
    <div> <img src={data.avatar_url} alt="" /> </div>
    </>
  )
}

export default Github