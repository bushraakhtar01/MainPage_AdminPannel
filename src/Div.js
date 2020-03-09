import React, { Component } from 'react';

class Div extends Component{
  render(){
    return(
    
    <div style={{marginTop:"5px", marginLeft:'10px',backgroundColor:'#E3E2DF',width:'98.5%'}} >
        
        <h3 style={{textAlign:'center', paddingTop:'25px', fontWeight:'bold'}}>Top Trending</h3>
 
        <p style={{textAlign:'center',fontSize:'18px'}}>Choose the best, wear the elegance</p>

        <div >
      <div className="ui card" style={{display:'inline-block',width:'24.5%',marginLeft:'3px'}}>
        <div className="image">
          <img src="PicCarousel12.jpg" />
        </div>
      </div>
      <div className="ui card" style={{display:'inline-block',width:'24.5%',marginLeft:'3px'}}>
        <div className="image">
          <img src="PicCarousel10.jpg" />
        </div>
      </div>
      <div className="ui card" style={{display:'inline-block',width:'24.5%',marginLeft:'3px'}}>
        <div className="image">
          <img src="PicCarousel2.jpg" />
        </div>
      </div>
      <div className="ui card" style={{display:'inline-block',width:'24.5%',marginLeft:'3px'}}>
        <div className="image">
          <img src="PicCarousel7.jpg" />
        </div>
      </div>      <div className="ui card" style={{display:'inline-block',width:'24.5%',marginLeft:'3px',marginTop:'-10px'}}>

        <div className="image">
          <img src="PicCarousel11.jpg" />
        </div>
      </div>
      <div className="ui card" style={{display:'inline-block',width:'24.5%',marginLeft:'3px',marginTop:'-10px'}}>
        <div className="image">
          <img src="PicCarousel4.jpg" />
        </div>
      </div>
      <div className="ui card" style={{display:'inline-block',width:'24.5%',marginLeft:'3px',marginTop:'-10px'}}>
        <div className="image">
          <img src="PicCarousel1.jpg" />
        </div>
      </div>
      <div className="ui card" style={{display:'inline-block',width:'24.5%',marginLeft:'3px',marginTop:'-10px'}}>
        <div className="image">
          <img src="PicCarousel6.jpg" />
        </div>
      </div>
</div>
 
        

  
  </div>
  
    );

}
}
export default Div;