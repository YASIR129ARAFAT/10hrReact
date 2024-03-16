import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

function Customers() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://my.api.mockaroo.com/react_router_tut_api.json?key=c80227a0")
      .then((res) => res.json())
      .then((res2) => {
        setData(res2);
        console.log(res2);
      });
  }, []);

  return (
    <>
        {
            data.map((ele)=>{
                return(
                    <Card key={ele.id} first_name={ele.first_name} last_name={ele.last_name} gender={ele.gender} email={ele.email}></Card>
                )
            })
        }
    </>
  );
}

export default Customers;
