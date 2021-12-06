import React, { useState } from "react";

const HoroscopeContext = React.createContext({
  sign: "",
  setSign: (birthdate) => {},
});

const calculateSign = (date) => {
  if (
    (date.getMonth() === 2 && date.getDate() >= 21) ||
    (date.getMonth() === 3 && date.getDate() <= 19)
  )
    return "Aries";
  else if (
    (date.getMonth() === 3 && date.getDate() >= 20) ||
    (date.getMonth() === 4 && date.getDate() <= 20)
  )
    return "Taurus";
  else if (
    (date.getMonth() === 4 && date.getDate() >= 21) ||
    (date.getMonth() === 5 && date.getDate() <= 21)
  )
    return "Gemini";
  else if (
    (date.getMonth() === 5 && date.getDate() >= 22) ||
    (date.getMonth() === 6 && date.getDate() <= 22)
  )
    return "Cancer";
  else if (
    (date.getMonth() === 6 && date.getDate() >= 23) ||
    (date.getMonth() === 7 && date.getDate() <= 22)
  )
    return "Leo";
  else if (
    (date.getMonth() === 7 && date.getDate() >= 23) ||
    (date.getMonth() === 8 && date.getDate() <= 22)
  )
    return "Virgo";
  else if (
    (date.getMonth() === 8 && date.getDate() >= 23) ||
    (date.getMonth() === 9 && date.getDate() <= 23)
  )
    return "Libra";
  else if (
    (date.getMonth() === 9 && date.getDate() >= 24) ||
    (date.getMonth() === 10 && date.getDate() <= 21)
  )
    return "Scorpius";
  else if (
    (date.getMonth() === 10 && date.getDate() >= 22) ||
    (date.getMonth() === 11 && date.getDate() <= 21)
  )
    return "Sagittarius";
  else if (
    (date.getMonth() === 11 && date.getDate() >= 22) ||
    (date.getMonth() === 0 && date.getDate() <= 19)
  )
    return "Capricorn";
  else if (
    (date.getMonth() === 0 && date.getDate() >= 20) ||
    (date.getMonth() === 1 && date.getDate() <= 18)
  )
    return "Aquarius";
  else if (
    (date.getMonth() === 1 && date.getDate() >= 19) ||
    (date.getMonth() === 2 && date.getDate() <= 20)
  )
    return "Pisces";
};

export const HoroscopeContextProvider = (props) => {
  const [zodiacSign, setZodiacSign] = useState("");
  const zodiacSignHandler = (date) => {
    setZodiacSign(calculateSign(date));
  };
  const contextValue = {
    sign: zodiacSign,
    setSign: zodiacSignHandler,
  };

  return (
    <HoroscopeContext.Provider value={contextValue}>
      {props.children}
    </HoroscopeContext.Provider>
  );
};

export default HoroscopeContext;
