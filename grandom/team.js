import React, {component} from 'react';
import './team.js';
import Member from './Member';
class Team extends Component {
    render(){
        return (
        <div className ='card card-view'>
            <div className = 'card-body'>
               <h1>{this.props.teamname}</h1>
               <Member name={this.props.members[0]} />
               <Member name={this.props.members[1]} />
               <Member name={this.props.members[2]} />
               <Member name={this.props.members[3]} />
            </div>
        </div> 
        )       

    }
}

teamName.defaultProps = {
    name: 'Team Name',

}

export  default team-name;

class Team extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return(
            <div>
                {this.props.members.map( element => {
                    return <Member name={element}/>
                });}
                <name name= 'Team 1'> </name> 
            </div>
        )
    }
}