import { useEffect, useState } from "react";
import axios from "axios";

function Apicalling() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const res = await axios.get("https://api.imgflip.com/get_memes");
        setMemes(res.data.data.memes);
      } catch (error) {
        console.log("API Error:", error);
      }
    };

    fetchMemes();
  }, []);

  return memes;
}

export default Apicalling;
