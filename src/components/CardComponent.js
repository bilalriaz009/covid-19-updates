import React from 'react';
import moment from 'moment'
import {
Card, CardText, CardBody, Table , CardTitle,Container,Row,Col
} from 'reactstrap';
import '../card.css'
function CardComponent(props){   
    let formattedTime=moment(props.data.updated).format("hh:mm A")
    
    return(
        <Container>
            <Row md="3">
                <Col md="3"><div></div></Col>
                <Col md="6">
                    <Card className="card">
                        <CardBody>
                            <CardTitle className="time">
                                <center>
                                    Last updated on Today at:
                                    <p>{formattedTime}</p>
                                </center>
                            </CardTitle>
                            <CardText>
                                <Table bordered>
                                    <tbody> 
                                        <tr className="blue">
                                        <td>Total Confirmed Cases</td>
                                        <td>{props.data.cases}</td>
                                        </tr>
                                        <tr className="blue">
                                        <td>New Cases Today</td>
                                        <td>{props.data.todayCases}</td>
                                        </tr>
                                        <tr className="purple">
                                        <td>Active Cases</td>
                                        <td>{props.data.active}</td>
                                        </tr>
                                        <tr className="brown">
                                        <td>Critical</td>
                                        <td>{props.data.critical}</td>
                                        </tr>
                                        <tr className="red">
                                        <td>Total Deaths</td>
                                        <td>{props.data.deaths}</td>
                                        </tr>
                                        <tr className="red">
                                        <td>New Deaths Today</td>
                                        <td>{props.data.todayDeaths}</td>
                                        </tr>
                                        <tr className="green">
                                        <td>Total Recovered</td>
                                        <td>{props.data.recovered}</td>
                                        </tr>
                                        <tr className="green">
                                        <td>Recovered Today</td>
                                        <td>{props.data.todayRecovered}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </CardText>
                        </CardBody>
                    </Card>        
                </Col>
                <Col md="3"><div></div></Col>
            </Row>
        </Container>
    )
}
export default CardComponent