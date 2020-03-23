import React from "react";

const Weather = (props) => {
    return(
      <div className="infoWeath">
        { props.city &&
          <div>
            <p>Погода в: {props.city}, {props.country}</p>
            <p>Температура: {props.temp}</p>
            <p>Закат: {props.sunset}</p>
            <p>Давление: {props.pressure}</p>
          </div>
        }
        <p className="errors">{props.error}</p>
      </div>
    );
  }


export default Weather;
