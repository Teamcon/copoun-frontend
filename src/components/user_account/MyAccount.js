import React, { Component } from 'react';   
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import AccountInfo from './AccountInfo'
import OffersHistory from '../offers-history/OffersHistory'
import {withRouter} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import Col from 'react-bootstrap/col'
import Row from 'react-bootstrap/Row'
import {Link} from 'react-router-dom'
import './style.css'



class MyAccount extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                        <TabContainer id="left-tabs-example" defaultActiveKey="first">
                            <Row >
                                <Col sm={3} style={{backgroundColor:"white"}}>
                                <Nav variant="pills" className="flex-column">
                                <Link to='/my-account/account-info'>
                                    <Nav.Item className="tab-nav"> 
                                    <span style={{color:"white"}}>
                                    Account info </span> 
                                    </Nav.Item>
                                    </Link>

                                    <Link to='/my-account/offers-history'>
                                    <Nav.Item className="tab-nav">
                                     <span style={{color:"white"}}>Offers History</span>
                                    </Nav.Item>
                                    </Link>

                                </Nav>
                                </Col>
                                <Col sm={8}>
                                {/* <TabContent>
                                    <TabPane eventKey="first"> */}
                                    <Route path='/my-account/account-info' render ={()=>(        
                            <AccountInfo />
                            )}
                        /> 
                                    {/* </TabPane>
                                    <TabPane eventKey="second"> */}
                                    <Route path='/my-account/offers-history' render ={()=>(        
                            <OffersHistory />
                            )}
                        />
                                    {/* </TabPane>
                                </TabContent> */}
                                </Col>
                            </Row>
                        </TabContainer>
                        {/* <Nav justify variant="tabs" defaultActiveKey="/home">
                            <Nav.Item>
                                <Link to='/my-account/account-info'> Account info </Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to='/my-account/offers-history'> Offers History</Link>
                            </Nav.Item>
                        </Nav>
                   

                        <Route path='/my-account/account-info' render ={()=>(        
                            <AccountInfo />
                            )}
                        /> 

                        <Route path='/my-account/offers-history' render ={()=>(        
                            <OffersHistory />
                            )}
                        />  */}


                         {/* <Route path='/my-account-info' component={AccountInfo}/>
                        <Route path='/my-offers-history' component={OffersHistory}/>
                     */}
            </div>
         );
    }
}
 
export default withRouter (MyAccount) ;