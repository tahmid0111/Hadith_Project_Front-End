import { useState, useEffect } from "react";
import SingleHadith from "./SingleHadith";
import Loader from "../Loader/Loader";

const AllHadith = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("https://random-hadith-server.vercel.app/all-hadith")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
  return (
    <div>

        {datas.length > 0 ? datas.map((hadith) => (
            <SingleHadith key={hadith._id} hadith={hadith} />
          )): <Loader />}
          
    </div>
  );
};

export default AllHadith;
