import React from 'react';
import { withStyles, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import './RadiusSlider.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 200 + theme.spacing(3) * 2,
      marginLeft: 20,
    },
    margin: {
      height: theme.spacing(3),
    },
  }),
);

const PrettoSlider = withStyles({
  root: {
    color: '#0092FF',
    height: 8,
    margin: 0,
  },
  thumb: {
    height: 22,
    width: 22,
    backgroundColor: '#0092FF',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 5,
    borderRadius: 2,
  },
  rail: {
    height: 5,
    borderRadius: 2,
  },
})(Slider);


export default function RadiusSlider() {
  const classes = useStyles();

  const [value, setValue] = React.useState<number | string | Array<number | string>>(20);

  const handleSliderChange = (event: any, newValue: number | number[]) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} >
      <Grid container spacing={5} alignItems="center">
        <Grid item xs>
          <PrettoSlider  
            min={0}
            max={50}
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
          />
        </Grid>
        <Grid item>
          <p className="valueElement">{value}</p>
        </Grid>
      </Grid>
    </div>
  );
}