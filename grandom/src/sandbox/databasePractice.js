import React from 'react'
import randomizer from '../random-algorithm-sandbox/algorithm';

class DatabasePractice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [],
            teams: []
        }
    }

    componentDidMount() {
        this.props.db.ref('Students/').on('value', (snapsnot) => {
            new Promise( (resolve,reject) => {
                this.setState({
                    members: snapsnot.val(),
                })
                resolve('blah');
            }).then( (success) => {
                let randomIndices = randomizer(this.state.members.length);
                let newTeams = randomIndices.map( (index) => {
                    return this.state.members[index];
                })
                let teams = []
                for (let i = 0; i < 8; i++) {
                    teams.push(newTeams.splice(0,4));
                }
                return new Promise((resolve,reject) => {
                    this.setState({
                        teams: teams,
                    })
                })
            })
        })
    }

    render() {
        return(
            <div>
                {this.state.teams.map( (team) => {
                    return <p>{team}</p>
                })}
            </div>
        )
    }
}

export default DatabasePractice;

