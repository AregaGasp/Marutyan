import React, { Component } from 'react';
import { fetchRatesApi } from './api'

export class Exchange extends Component {
        state = {
            rates: [],
            isLoading: false,
            };


    componentDidMount() {
      fetchRatesApi();
      }
     

  render() {
    return (
      'hello'
        )
    }
}
export default Exchange;
// class App extends Component {
//     constructor(props) {
//       super(props);
  
//       this.state = {
//         hits: [],
//         isLoading: false,
//       };
//     }
  
//     componentDidMount() {
//       this.setState({ isLoading: true });
  
//       fetch(API + DEFAULT_QUERY)
//         .then(response => response.json())
//         .then(data => this.setState({ hits: data.hits, isLoading: false }));
//     }
  
//     ...
//   }