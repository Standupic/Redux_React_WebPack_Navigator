import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";


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
  const {checked, param, methodes} = props;
  const values = checked[param];
  const {handler} = methodes;

  console.log(values)

  const defaultValues = {
      "speed": {
            "value" : [50,1000],
            "max": 1000,
      },
      "navigatorprice": {
          "value": [350,8500],
          "max": 8500
    }
  }
  const classes = wrapStyles();
//   const {value,setValueSlider} = props;
  const [value, setValue] = React.useState([20, 37]);
 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <MySlider
        value={values.length ? values : null}
        max={defaultValues[param].max}
        onChange={(event,obj)=>{handler(event,obj)}}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        defaultValue={defaultValues[param].value}
      />
    </div>
  );
}

export default RangeSlider
