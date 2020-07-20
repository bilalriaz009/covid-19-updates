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
      fetch("https://corona.lmao.ninja/v2/countries/pakistan")
        .then(response => response.json())
        .then(data => {
          this.setState({
            myData: data
          })
        })
    }

    render(){
        if(this.state.myData){
            return(
                <Info myData={this.state.myData}/>
            )
        }
        else{
            return(<div></div>)
        }
        
    }
}
export default Main;
