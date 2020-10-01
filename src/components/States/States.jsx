import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import styles from './States.module.css';
import {fetchStates} from '../../api';

const States = ({stateChange}) => {
  const [fetchedstates,setFetchedstates] = useState([]);
    useEffect(() => {
      const fetchApi =  async () => {
        setFetchedstates(await fetchStates());
      }
      fetchApi();
    },[]);

console.log(fetchedstates);
  return(
    <FormControl className={styles.FormControl}>
      <NativeSelect default='' onChange={(e) => stateChange(e.target.value)} className={styles.option}>
        {fetchedstates.map((states,i) => <option key={i} value={states.statecode}>{states.state}</option>)}
      </NativeSelect>
    </FormControl>

  )
}

export default States;