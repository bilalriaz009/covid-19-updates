import React from 'react';
import CardComponent from './CardComponent'
function Info(props){
    return(
        <div>
            <CardComponent data={props.myData}/>
        </div>
    )
}
export default Info