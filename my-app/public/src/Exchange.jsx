import React, { Component } from 'react';
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
        const dateToFormat = new Date();åå
    return (
      <div className='container'>
          <div>
          <h1 className='header'>EXCHANGE</h1>
          </div>
            <div className='dataAndTime'>
              <div>
                <span className='redText'>ԱՄՍԱԹԻՎ/Date</span>

                <div className='dataAndTimeDetails'>
                  <Moment format="YYYY/MM/DD">{dateToFormat}</Moment>
                </div>
              </div>
              <div>
                <span className='redText'>ԺԱՄ/Time</span>
                <div className='dataAndTimeDetails'>
                  <Moment format="HH:mm:ss">{dateToFormat}</Moment>
                </div>
              </div>
            </div>
            <div className='redTextSpan'>
                {/* <span className={css(styles.redText)}>WE BUY AT</span>
                <span className={css(styles.redText)}>WE BUY AT</span> */}
              </div>
              <div>
                <div>
                <div>
                <div className='wrapper'>
					          {rates.map((rate,index) =>
                        <div className ='currency-flag' className='singleCurrency' key={index}>
                            <div className='currency'><img src={`/public/img/${rate.currency}.png`} />{rate.currency}</div>
                            <div className='number pRate'>{rate.purchase_price}</div>
                            <div className='number sRate'>{rate.sale_price}</div>
                        </div>
                    )}
                </div>
                </div>
                </div>
          </div>
        </div>)
    }
}


export default Exchange;