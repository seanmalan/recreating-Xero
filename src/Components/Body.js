import { React, useEffect, useState } from "react";
import Section2 from "./Section2/Section2";
import XeroForFree from "./XeroForFree";
import SellPoints from "./SellPoints";
import Data from "./Features/data";

const Body = () => {
  // const [features, setData] = useState([]);
  // console.log(features);

  // useEffect(() => {
  //   const loadData = async () => {
  //     const features = await Data();
  //     setData(features);
  //   };

  //   loadData();
  // }, []);

  return (
    <>
      <div>
        <div>
          <Section2 />
        </div>
        <div>
          <SellPoints />
        </div>
        <div>
          ####
        </div>
        <div>
          <XeroForFree />
        </div>
      </div>
    </>
  );
};

export default Body;
