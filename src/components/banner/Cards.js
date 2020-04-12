import React from 'react';
import axios from 'axios'
import './style.css'





class Cards extends React.Component {
    state = {
        BannerData : []
    }

    componentDidMount(){
        axios.get("http://api.giphy.com/v1/gifs/search?q=Advertisement&api_key=6rnJmKbPBm2t7iaAn7hQfk4muYIKqo1w&limit=6")
        .then(res =>{
            const data = res.data
            this.setState({BannerData:data.data})
            console.log(this.state.BannerData)
        }) 
        .catch(err=>alert(err))
    }
    render() {
    //   const cardData = CardData(); // show in the following codes
      return (
        <section className="slideAnimate">
        {
          
          this.state.BannerData.map((card, i) => {
            return (
              <div className="card" id="card" key={i}>
                <p className="title">{card.title}</p>
                {/* <p className="desc">{card.desc}</p> */}
                <a href="#"><img src={card.images.original.url} /></a>
              </div>
            )
          })
        }
        </section>
      )
    }
  }
  export default Cards
