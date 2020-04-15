import React, { Component } from 'react';
//import axios from 'axios';
import {withRouter} from 'react-router-dom';
import QRCode from 'qrcode.react'
class Voucher extends Component {
    // state = { 
    //     qr:''
        
    //  }
    
    //  componentDidMount() {
    //     axios.get(`https://api.qrserver.com/v1/create-qr-code/?size=1x1&data=2222323`)
    //       .then(res => {
    //         const qr= res.data;
             
    //          console.log(qr)
    //         this.setState({
    //              qr:qr});
    //         });
    //   }
    
    
        render() { 
        return (
            <div>
           <h1>rana</h1>
            <QRCode value="333334677"/>

           </div>
        );}}
 
export default withRouter('Voucher');