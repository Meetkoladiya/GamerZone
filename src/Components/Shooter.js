import React, { useState, useEffect } from "react";
import axios from "axios";
import { dataURL } from "../Data";
import Loading from "./Loading";
import SinglePost from "./SinglePost";
import "../Css/comman.css";

function Shooter() {
  const [shooter, setShooterData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const options = {
      method: "GET",
      url: `${dataURL}?category=shooter`,
      params: { tag: "3d.mmorpg.fantasy.pvp", platform: "pc" },
      headers: {
        "x-rapidapi-key": "170d4564b3msh4e1c7047ad49f54p1d2afdjsn4dfdf83d2f4b",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setShooterData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    setLoading(!Loading);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="socialPage">
      {loading ? (
        <Loading />
      ) : (
        <div className="allData">
          {shooter.map((data) => {
            return (
              <SinglePost
                key={data.id}
                image={data.thumbnail}
                name={data.title}
                about={data.short_description}
                publisher={data.publisher}
                developer={data.developer}
                download={data.game_url}
                play={data.freetogame_profile_url}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
export default Shooter;
