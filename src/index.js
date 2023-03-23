import React from "react";
import ReactDOM from "react-dom";

var myDate = new Date();
var hrs = myDate.getHours();

var greet;
const customStyle = {
  color: ""
};

if (hrs < 12) {
  greet = "Good Morning";
  customStyle.color = "red";
} else if (hrs >= 12 && hrs <= 17) {
  greet = "Good Afternoon";
  customStyle.color = "red";
} else if (hrs >= 17 && hrs <= 24) {
  greet = "Good Evening";
  customStyle.color = "red";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {greet}
    </h1>
  </div>,
  document.getElementById("root")
);

//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
