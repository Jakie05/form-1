import {Component} from 'react';
import './form.css';

export class Form extends Component
{
    render(){
        
        return(
            <div className="main">
                {this.props.entery.map((item)=>{
                    return(
                        <p key={item.id} className="p">Name : {item.name} | Department : {item.department} | Rating : {item.rating}</p>
                    )
                })}
            </div>
        );
    }
}