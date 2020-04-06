import React, { Component } from 'react';
import {Carousel, CarouselItem} from 'react-bootstrap'
import CarouselCaption from 'react-bootstrap/CarouselCaption';
import axios from 'axios'


class Banner extends Component {
    state = {
        BannerData : []
    }

    componentDidMount(){
        axios.get("http://api.giphy.com/v1/gifs/search?q=Advertisement&api_key=6rnJmKbPBm2t7iaAn7hQfk4muYIKqo1w&limit=5")
        .then(res =>{
            const data = res.data
            this.setState({BannerData:data.data})
            console.log(this.state.BannerData)
        }) 
        .catch(err=>alert(err))
    }

    render() { 
        return ( 
            <Carousel>
                {this.state.BannerData.map(item => ( 
                     <CarouselItem>
                     <img
                      className="d-block w-100"
                      src={item.images.original.url}
                      alt={item.title}
                      />
                     <CarouselCaption>
                         <h3>{item.title}</h3>
                         <p>{item.source_tld}</p>
                     </CarouselCaption>
                 </CarouselItem>
                ))}
            </Carousel>
         );
    }
}
 
export default Banner;