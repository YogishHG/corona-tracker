import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import styles from './cards.module.css';
import CountUp from 'react-countup';
import cx from'classnames';

const Cards = (props) => {
    
  if(!props.data.confirmed) {
    
    return 'Loading...';
  }


  return(
    <div className={styles.container}>
        <Grid container spacing={4} justify="center" >
          <Grid item component={Card} xs={12} md={2} className={cx(styles.card,styles.infected)}>
            <CardContent>
              <Typography color='textSecondary' gutterBottom>Infected</Typography>
              <Typography variant='h5'><CountUp start={0} end ={props.data.confirmed} durtion={2.5} separator=','/></Typography>
              <Typography colr="textSecondary">{props.data.lastupdatedtime}</Typography>
              <Typography variant='body2'> Total Cases of Covid-19</Typography>
            </CardContent>
          </Grid>
          <Grid item component={Card} xs={12} md={2} className={cx(styles.card,styles.active)}>
            <CardContent>
              <Typography color='textSecondary' gutterBottom>Active</Typography>
              <Typography variant='h5'><CountUp start={0} end ={props.data.active} durtion={2.5} separator=','/></Typography>
              <Typography colr="textSecondary">{props.data.lastupdatedtime}</Typography>
              <Typography variant='body2'>Number of Active cases</Typography>
            </CardContent>
          </Grid>
          <Grid item component={Card}xs={12} md={2} className={cx(styles.card,styles.recovered)}>
            <CardContent>
              <Typography color='textSecondary' gutterBottom>Recovered</Typography>
              <Typography variant='h5'><CountUp start={0} end ={props.data.recovered} durtion={2.5} separator=','/></Typography>
              <Typography colr="textSecondary">{props.data.lastupdatedtime}</Typography>
              <Typography variant='body2'>Number of Recovered Cases </Typography>
            </CardContent>
          </Grid>
          <Grid item component={Card} xs={12} md={2} className={cx(styles.card,styles.deaths)}>
            <CardContent>
              <Typography color='textSecondary' gutterBottom>Deaths</Typography>
              <Typography variant='h5'><CountUp start={0} end ={props.data.deaths} durtion={2.5} separator=','/></Typography>
              <Typography colr="textSecondary">{props.data.lastupdatedtime}</Typography>
              <Typography variant='body2'>Number of Deaths </Typography>
            </CardContent>
          </Grid>
          
        </Grid>
    </div>
  )
}

export default Cards;
