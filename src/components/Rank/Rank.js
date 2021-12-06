import React, {Component} from "react";
import './Rank.css';

class Rank extends Component{
    render(){
        return (
            <div >
                <div className="nameText">
                    {`${this.props.name}, your current entry count is...`}
                </div>
                <div className="rankText">
                    {this.props.entries}
                </div>
            </div>
        );
    }
}
export default Rank;