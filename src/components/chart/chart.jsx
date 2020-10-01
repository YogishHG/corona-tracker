import React,{useState,useEffect} from 'react';
 import { fetchDailyData } from '../../api'; 
import { Bar,Line } from 'react-chartjs-2';
import styles from './chart.module.css'


const Charts = ( { data } ) => {
  const [dailyData,setDailyData] = useState([]);
  
  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyData());
    }

    fetchApi();

  },[]);


  const barChart = (
    data.confirmed
    ? (
      <Bar
      data = {{
        labels: ['Infected','Recovered','Deaths'],
        datasets:[{
          label:'People',
          backgroundColor:['rgba(0,0,255,0.5)',
        'rgba(0,255,0,0.5)',
        'rgba(255,0,0,0.5)'],
        hoverBackgroundColor:['rgba(0,0,255,1)',
        'rgba(0,255,0,1)',
        'rgba(255,0,0,1)'],
      data: [data.confirmed,data.recovered,data.deaths]
        }]
      }}
      options={{
        legend: {display:false},
        title:{
          display:true,text:`Current  : ${data.state}`
        }
      }}
      />) : null
    );
const lineChart = (
    dailyData.length ?
    (
    <Line
    data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [{
        data: dailyData.map(({confirmed}) => confirmed),
        label: 'Infected',
        borderColor: '#3333ff',
        fill: true,
        },{
            data: dailyData.map(({deaths}) => deaths),
            label: 'Deaths',
            borderColor: '#ff3333',
            fill: true,
        },
        {
            data: dailyData.map(({recovered}) => recovered),
            label: 'Recovered',
            borderColor: '#33ff33',
            fill: true,
        }],
    }}
    />):null
    );
    if (data.state === 'Total'){
      return(
        <div className={styles.container}>
        
          {
            lineChart
          }
  
        </div>
      )

    }
    else{
      return(
        <div className={styles.container}>
        
          {
            barChart
          }
  
        </div>
      )

    }
    
    
}

export default Charts;    