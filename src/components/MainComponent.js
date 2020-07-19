import React,{Component} from 'react';
import Info from './InfoComponent'
class Main extends Component {

    constructor(props) {
      super(props)
      this.state = {
        myData: ""
      }
    }
    componentDidMount=()=> {
      fetch("https://api.covid19api.com/summary")
        .then(response => response.json())
        .then(data => {
          this.setState({
            myData: data.Countries[126]
          })
        })
    }
    getDate(date){
        return(date.split("T")[0])
    }

    render(){
        if(this.state.myData){
            return(
                <Info myData={this.state.myData} getDate={this.getDate}/>
            )
        }
        else{
            return(<div></div>)
        }
        
    }
}
export default Main;
