import React from 'react';
import {Cards,States,Charts} from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component{
  state= {
    data: {},
    
  }
  async componentDidMount(){
    const fetcheddata = await fetchData();
    console.log(fetcheddata)
    this.setState({data:fetcheddata});

  }
  stateChange = async (state) => {
    
    const fetcheddata = await fetchData(state);
    console.log(fetcheddata)
    this.setState({data:fetcheddata});
     
    
  }

  render() {
    return (
      <div >
          <div className={styles.header} >
            <div className={styles.header_logo}>
              <img className={styles.header__logo} src="https://images.squarespace-cdn.com/content/v1/54f58e94e4b08c831d4161f4/1584392475798-RE3O586Q17VIHDV7G939/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwkCFOLgzJj4yIx-vIIEbyWWRd0QUGL6lY_wBICnBy59Ye9GKQq6_hlXZJyaybXpCc/image-asset.png" />
            </div>
            <div className={styles.header__search}>
              <h1 className={styles.covid}>Covid Tracker</h1>
            </div>
            
          </div>
          <Cards data={this.state.data} />
          <States stateChange={this.stateChange}/>
          <Charts data={this.state.data} />
        
      </div>
      
    )
  }
}

export default App;
