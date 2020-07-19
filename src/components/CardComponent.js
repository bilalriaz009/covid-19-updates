import React from 'react';
import {
Card, CardText, CardBody, CardHeader
} from 'reactstrap';
import '../card.css'
function CardComponent(props){    
    return(
        <Card>
            <CardHeader style={
                {
                    backgroundColor:props.color,
                    color:'#FFFFFF'
                }
            }>
                <b><h2>{props.headerLine}</h2></b>
            </CardHeader>
            <CardBody>
                <CardText>
                    <b><h1>{props.data}</h1></b>
                </CardText>
            </CardBody>
        </Card>
    )
}
export default CardComponent