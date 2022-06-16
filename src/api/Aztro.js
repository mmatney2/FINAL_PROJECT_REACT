import React, { Component } from 'react';

// const endpoint= '/horoscope'



class Aztro extends Component {
    constructor(props){
        super(props);
        this.state = {json: {}};
        this.handleChange = this.handleSubmit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleChange(event){
            this.setState({value: event.target.value});
        }
        handleSubmit(event){
            alert('A sign and day was submitted: '+ this.state.value);
            event.preventDefault();
        }
    

    componentDidMount () {
        const URL = `https://aztro.sameerkumar.website/?sign=virgo&day=today`;
        fetch(URL, {
            method: 'POST'
        }).then(response => response.json())
        .then(json => { this.setState({json}); });
        console.log(this)
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
            <br/>
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
            <br/>
            <input type="submit" value="Submit"/><br/>
              Current Date: {this.state.json.current_date} <br />
              Compatibility: {this.state.json.compatibility} <br />
              Lucky Number: {this.state.json.lucky_number} <br />
              Lucky Time: {this.state.json.lucky_time} <br />
              Color: {this.state.json.color} <br />
              Date Range: {this.state.json.date_range} <br />
              Mood: {this.state.json.mood} <br />
              Description: {this.state.json.description} <br />
              
          </label>
          
          </form>
        );
    }
}
// let searchButton=document.getElementById("search")
// searchButton.addEventListener("click", function(){
//     let sign= document.getElementById("sign").value
//     componentDidMount(sign)
// })
export default Aztro;





// How to get Horoscope by User Id -->

// const getByUse = async(id, cancelToken)=>{
//     let error;
//     let horoscopes;
//     const response = await clientBasicAuth(cancelToken).get(endpoint+'/user/'+id);
//     if(response.ok){
//         horoscopes=response.data.horoscopes
//     }else{
//         error = "An Unexpected Error has Occured. Please Try again Later."
//     }
//     return {
//         error,
//         horoscopes
//     }
// }

// const apiClient = {
    
//     getByUse
// }
// export default apiClient