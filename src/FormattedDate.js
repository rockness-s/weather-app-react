import React from "react";

export default function FormattedDate(props) {
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = days[props.date.getDay()];
    let hours = String(props.date.getHours()).padStart(2, "0");
    let minutes = String(props.date.getMinutes()).padStart(2, "0");
    let date = props.date.getDate();
    let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let month = months[props.date.getMonth()];
    let year = props.date.getFullYear();

    return(
    <div>
    <div>{date} {month} {year}</div>
    <div>{day} {hours}:{minutes}</div>
    </div>
    )
}