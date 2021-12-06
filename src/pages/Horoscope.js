import { useContext, useState, useCallback, useEffect } from "react";
import Description from "../components/Horoscope/Description";
import HoroscopeContext from "../store/horoscope-ctx";
import Compatibility from "../components/Horoscope/Compatibility";
import Luck from "../components/Horoscope/Luck";
import { Route, useRouteMatch } from "react-router";
import Mood from "../components/Horoscope/Mood";

const Horoscope = () => {
  const ctx = useContext(HoroscopeContext);
  const match = useRouteMatch();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDataHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    const url = `https://aztro.sameerkumar.website/?sign=${ctx.sign.toLowerCase()}&day=today`;
    try {
      const response = await fetch(url, {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const json = await response.json();
      setData(json);
    } catch (err) {
      setError(err.message || "Something went wrong!");
      setIsLoading(false);
    }
    setIsLoading(false);
  }, [ctx.sign]);

  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler]);

  return (
    <div>
      <Route path={`${match.path}/description`}>
        <Description
          description={data.description}
          isLoading={isLoading}
          error={error}
        />
      </Route>
      <Route path={`${match.path}/luck`}>
        <Luck
          lucky_number={data.lucky_number}
          lucky_time={data.lucky_time}
          isLoading={isLoading}
          error={error}
        />
      </Route>
      <Route path={`${match.path}/compatibility`}>
        <Compatibility
          compatibility={data.compatibility}
          isLoading={isLoading}
          error={error}
        />
      </Route>
      <Route path={`${match.path}/mood`}>
        <Mood mood={data.mood} isLoading={isLoading} error={error} />
      </Route>
    </div>
  );
};

export default Horoscope;
