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
  markActive: {
    backgroundColor: "#880a6d"
  },
  track: {
    height: 7
  },
  mark: {
      height: 7,
      width: 5
  },
  thumb: {
    height: 16,
    width: 16,
    marginTop: -5,
    marginLeft: -8
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



const MarksSlider = (props) => {
//   const {checked, param, methodes} = props;
//   const values = checked[param];
//   const {handler} = methodes;

  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 250,
      label: '50',
    },
    {
      value: 500,
      label: '100',
    },
    {
      value: 1000,
      label: '1000',
    },
  ];
  
  const rangeMarks = {
      "250": [0,50],
      "500": [50,100],
      "1000": [100,1000]

  }
  function valuetext(value) {
    if(value == 250 || value == 500){
        return `${value / 50}0`
    }else{
        return `${value}`
    }
  }
  
  
  const classes = wrapStyles();
 
  return (
    <div className={classes.root}>
      <MySlider
        onChange={(e,obj)=>{
        handler(event,{'param':param,'value':rangeMarks[obj.toString()]})}}
        defaultValue={0}
        valueLabelFormat={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={250}
        valueLabelDisplay="auto"
        marks={marks}
        max={1000}
        min={0}
      />
    </div>
  );
}

export default MarksSlider
