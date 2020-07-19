import React,{Component} from 'react';
import {
    Container,Row,Col
} from 'reactstrap';
import CardComponent from './CardComponent'
function Info(props){
    return(
        <div>
            <center>
                <p style={
                    {
                        fontSize:'60px'
                    }
                }>
                    {props.getDate(props.myData.Date)}
                </p>
            </center>
            <hr/>
            <Container>
                <Row sm="2">
                    <Col sm="6"><CardComponent color="#2533E1" data={props.myData.TotalConfirmed} headerLine="Total Confirmed Cases: "/></Col>
                    <Col sm="6"><CardComponent color="#2533E1" data={props.myData.NewConfirmed} headerLine="New Confirmed Cases: "/></Col>
                    <Col sm="6"><CardComponent color="#EA3C00" data={props.myData.TotalDeaths} headerLine="Total Deaths: "/></Col>
                    <Col sm="6"><CardComponent color="#EA3C00" data={props.myData.NewDeaths} headerLine="New Deaths: "/></Col>
                    <Col sm="6"><CardComponent color="#2ECC00" data={props.myData.TotalRecovered} headerLine="Total Recovered: "/></Col>
                    <Col sm="6"><CardComponent color="#2ECC00" data={props.myData.NewRecovered} headerLine="New Recovered: "/></Col>
                </Row>
            </Container>
            <hr/>
        </div>
               /* <CardTitle><h1>{props.getDate(props.myData.Date)}</h1></CardTitle> */
    )
}
export default Info