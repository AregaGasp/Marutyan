import React, { Component } from 'react';


export class Exchange extends Component {
        state = {
            rates: [],
            isLoading: false,
            };

    componentDidMount() {
        fetch(`https://exchangesos.herokuapp.com/api/all`).then(data => data.json()).then(res =>
        this.setState({
          rates: res,
          isLoading: false,
        }),
      )};
      render() {
        const { rates } = this.state
        console.log (rates);
    return (
      <div>
          <div>
          <h1 className = {'mainHeader'}>EXCHANGE</h1>
          </div>
          {/* <table> */}
           {/* <tbody>
                <th>CURRENCY</th>
                <tr></tr>
                <th>CURRENCY</th>
                <tr></tr>
                </tbody>
          </table> */}
          <table>
           <tbody>
             <tr>
                <th>CURRENCY
                {rates.map((rate,index) => <tr key={index}>{rate.currency}</tr>)}
                </th>
                <th>ՎԱՃԱՌՔ We SELL At
                {rates.map((rate,index) => <tr key={index}>{rate.purchase_price}</tr>)}
                </th>
                <th>ԱՌՔ We BUY At
                {rates.map((rate,index) => <tr key={index}>{rate.sale_price}</tr>)}
                </th>
              </tr>
            </tbody>
          </table>
        </div>)
    }
}
export default Exchange;