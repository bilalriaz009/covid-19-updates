import React,{Component} from 'react';
import Info from './InfoComponent'
import {Spinner} from 'reactstrap'
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
            return(
              <div>
                <center>
                  <Spinner type="grow" color="light" style={{ width: '3rem', height: '3rem' }} />{' '}
                </center>
              </div>)
        }
        
    }
}
export default Main;
