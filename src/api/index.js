import axios from 'axios';
const url = 'https://api.covid19india.org/data.json';

export const fetchData = async (state) => {
    
  
    try {
    const { data }= await axios.get(url);
    console.log(data)
    var modifiedData = data.statewise[0]
    console.log(modifiedData);
    if(state){
        data.statewise.map((states,i) => {
            if(states.statecode === state){
                modifiedData = data.statewise[i]
                console.log(modifiedData);
                
                
            }
            
        });
    }
    
    
        
    
    
    
    return modifiedData;
    } catch (error) {


    }
  }

export const fetchStates = async () => {
    try {
        const { data }= await axios.get(url);
        console.log(data)
        const modifiedData = data.statewise
        console.log(modifiedData);
        return modifiedData;
        } catch (error) {
    
    
        }
}

export const fetchDailyData = async () => {
    try {
      const { data } = await axios.get(url);
      
  
      const modifiedData = data.cases_time_series.map((dailyData) =>({
        confirmed:dailyData.totalconfirmed,
        deaths: dailyData.totaldeceased,
        date: dailyData.date,
        recovered: dailyData.totalrecovered,
      }));
      console.log(modifiedData)
  
      return modifiedData;
  
    } catch (error){
  
    }
  }