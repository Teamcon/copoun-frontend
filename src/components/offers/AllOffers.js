            import React, { Component } from 'react';
            import Offers from './Offers'
            import './style.css';
            
            class AllOffers extends Component {
                constructor(){
                    super();
                this.state = { search:"" 
            };
            }
            handleChange(event){
            this.setState ({search:event.target.value})
            }
                
                render() { 
                    
                    let fillterdOffer= this.props.alldata.data.filter(
                        (offer)=>{
                            let name=offer.name
                            
                            
                        return name.toLowerCase().indexOf(
                            this.state.search.toLowerCase())!==-1;
                        });
                    return( 
                      <div>
                            
                        
                        <div>      
                           <input  style={{width:"300px"}}
                            type="text"
                            placeholder="Search Offer"
                            value={this.state.search}
                            onChange={this.handleChange.bind(this)}
                            aria-label="Search" 
                            />
                         <span className="material-icons">search</span>
                        
                         <span className="material-icons">
                            apps
                            </span>
                            <span className="material-icons">
                            local_grocery_store
                         </span></div>
                        
                        
                        
                          <br/><br/>
                            <div>
                            <div>
          {fillterdOffer.map(offer =>{
        
        
          
             return(<Offers
             offer={offer} key={offer.id}/>)})
             }
        </div>
                        
                            
                            </div>
                        </div> 
                        
                    );
                }
            }
            
            export default AllOffers;