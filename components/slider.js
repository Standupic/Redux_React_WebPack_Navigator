import React from "react";
import {connect} from 'react-redux';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
// import {sliderSelector} from "../selectors";
// import {setValueSlider} from "../action";

const wrapStyles = makeStyles({
  root: {
    width: 170,
    padding: "50px 22px"
  },
  thumb: {
    height: 24,
    width: 24
  }
});

const MySlider = withStyles({
  root: {
    color: "#ec6608"
  },
  track: {
    height: 7
  },
  thumb: {
    height: 16,
    width: 16,
    marginTop: -5,
    marginLeft: -12
  },
  rail: {
    height: 7,
    opacity: 0.5,
    borderRaduis: 10,
    backgroundColor: "#d8d8d8"
  },
  valueLabel: {
    left: -8
  }
})(Slider);

function valuetext(value) {
  return `${value}°C`;
}

const RangeSlider = (props) => {
  const classes = wrapStyles();
//   const {value,setValueSlider} = props;
  const [value, setValue] = React.useState([20, 37]);
 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <MySlider
        value={value}
        max={value[1]}
        onChange={(event,obj)=>{setValue(event,obj)}}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        defaultValue={[]}
      />
    </div>
  );
}

export default RangeSlider
// export default connect((state) =>({
//     value: sliderSelector(state)
//     }),
//     {setValueSlider}
// )(RangeSlider)