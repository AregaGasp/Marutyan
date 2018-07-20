import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Moment from 'react-moment';
import 'moment-timezone';
 



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
        const dateToFormat = new Date();
    return (
      <div className={css(styles.container)}>
          <div>
          <h1 className={css(styles.header)}>EXCHANGE</h1>
          </div>
            <div className={css(styles.dataAndTime)}>
              <div>
                <span className={css(styles.redText)}>ԱՄՍԱԹԻՎ/Date</span>

                <div className={css(styles.dataAndTimeDetails)}>                
                  <Moment format="YYYY/MM/DD">{dateToFormat}</Moment>
                </div>
              </div>
              <div>
                <span className={css(styles.redText)}>ԺԱՄ/Time</span>
                <div className={css(styles.dataAndTimeDetails)}>                
                  <Moment format="HH:mm:ss">{dateToFormat}</Moment>
                </div>
              </div>
            </div>
            <div className={css(styles.redTextSpan)}>
                {/* <span className={css(styles.redText)}>WE BUY AT</span>
                <span className={css(styles.redText)}>WE BUY AT</span> */}
              </div>
              <div>
                <div>
                <div className={css(styles.rateInfo)}>
                <div>
                      {/* {flags.map((rate,index) => <div className={css(styles.currency)} key={index}>{rate.currency}</div>)} */}
                   </div>
                    <div>
                    <span className={css(styles.redText)}>Cur</span>
                      {rates.map((rate,index) => <div className={css(styles.dataAndTimeDetails)} key={index}>{rate.currency}</div>)}
                   </div>
                   <div>
                   <span className={css(styles.redText)}>WE BUY AT</span>
                      {rates.map((rate,index) => <div className={css(styles.dataAndTimeDetails)} key={index}>{rate.purchase_price}</div>)}  
                   </div>
                   <div>
                   <span className={css(styles.redText)}>WE BUY AT</span>
                      {rates.map((rate,index) => <div className={css(styles.dataAndTimeDetails)} key={index}>{rate.sale_price}</div>)}    
                  </div>
                  </div>
            </div>
          </div>
        </div>)
    }
}

const styles = StyleSheet.create({
  rateInfo: {
      display: 'flex',
      justifyContent: 'center',

  },
  container: {
    width: '60%',
    margin: 'auto',
    textAlign: 'center'
  },
  dataAndTime: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '20%',
    margin: 'auto',
  },
  dataAndTimeDetails: {
    height: '25px',
    borderStyle: 'groove',
    // width: '100%',
    display: 'flex',

  },
  redText: {
    color:'red',
    fontWeight: '900',

  },
  header: {
    color:'red',
    fontWeight: '2000',
    fontSize: '40px',
  },
  currency: {
    height: '25px',
    borderStyle: 'groove',
    borderColor: 'white',
  }
});



export default Exchange;












// <div>
// {rates.map((rate,index) => <tr key={index}>{rate.currency}</tr>)}
// </div>
// <div>ՎԱՃԱՌՔ We SELL At
// {rates.map((rate,index) => <tr key={index}>{rate.purchase_price}</tr>)}
// </div>
// <div>ԱՌՔ We BUY At
// {rates.map((rate,index) => <tr key={index}>{rate.sale_price}</tr>)}
// </div>