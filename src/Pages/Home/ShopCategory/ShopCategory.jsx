import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Cows from "./Cows/Cows";
import Bear from "./Bear/Bear";
import HorsePower from "./HorsePower/HorsePower";
import "./ShopCategory.css";

const ShopCategory = () => {
  const [cows, setCows] = useState([]);
  const [bears, setBears] = useState([]);
  const [horses, setHorses] = useState([]);
  const [toggleState, setToggleStaate] = useState(1);

  const toggleTab = (index) => {
    // console.log(index);
    setToggleStaate(index);
  };

  useEffect(() => {
    fetch("http://localhost:5000/cow")
      .then((res) => res.json())
      .then((data) => setCows(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/bear")
      .then((res) => res.json())
      .then((data) => setBears(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/horse")
      .then((res) => res.json())
      .then((data) => setHorses(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto my-10 p-4 lg:p-0">
      <h1 className="text-center mt-20 mb-5 text-3xl font-bold text-black">
        Different Types Of Toy
      </h1>
      <Tabs>
        <TabList className=" flex justify-between text-gray-500 font-bold p-4 ">
          <Tab
            className={
              toggleState === 1
                ? "tabs active-tabs text-center mx-auto border-0"
                : "tabs text-center mx-auto"
            }
            onClick={() => toggleTab(1)}
          >
            Bear
          </Tab>
          <Tab
            className={
              toggleState === 2
                ? "tabs active-tabs border-b-orange-600 text-center mx-auto border-0"
                : "tabs text-center mx-auto"
            }
            onClick={() => toggleTab(2)}
          >
            Cows
          </Tab>
          <Tab
            className={
              toggleState === 3
                ? "tabs active-tabs text-center mx-auto border-0"
                : "tabs text-center mx-auto"
            }
            onClick={() => toggleTab(3)}
          >
            Horse
          </Tab>
        </TabList>

        <TabPanel>
          <div className="grid lg:grid-cols-3 gap-8 mt-4">
            {bears.map((bear) => (
              <Bear key={bear.id} bear={bear}></Bear>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 gap-6 mt-4">
            {cows.map((cow) => (
              <Cows key={cow.id} cow={cow}></Cows>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 gap-6 mt-4">
            {horses.map((horse) => (
              <HorsePower key={horse.id} horse={horse}></HorsePower>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopCategory;
