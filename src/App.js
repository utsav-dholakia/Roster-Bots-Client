import React, { Component } from 'react';
import './css/App.css';
import './css/bootstrap.min.css';

class App extends Component {

    constructor(){
        super();
        this.state = {
            teamName: '',
            roster: '',
            displayMessage: '',
            displayLoader:  false
        };
        this.handleTeamNameChange = this.handleTeamNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTeamNameChange(event){
        var value = event.target.value;
        if(/^[a-z]+$/i.test(value)) {
            this.setState({teamName: value});
        }
        else{
            event.target.value = value.substr(0, value.length - 1);
            event.preventDefault();
        }
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({displayLoader:   true, displayMessage:   ''});
        fetch('http://localhost:5555/generateTeam',{
            method: 'POST',
            headers:    {
                'Content-Type': 'application/json'
            },
            body:   JSON.stringify({
                teamName    :   this.state.teamName
            })
        }).then(function(response) {
            if (response.status >= 200 && response.status < 300) {
                return response.json()
            } else {
                var error = new Error(response.statusText);
                error.response = response;
                throw error
            }
        }).then(function(response){
            this.setState({roster:    response, displayMessage:   'Total team score :  ' + response.totalTeamScore,
                displayLoader:  false});
        }.bind(this)).catch(function(error) {
            console.error(error.response);
            this.setState({roster:    '', displayMessage: 'There was an error while generating roster. Try Again!'
                , displayLoader:  false});
        }.bind(this));
        this.setState({teamName:    ''});
    }

    render() {
        return (
            <div className="container-fluid" align="center">
                <header className="App-header">
                    <h1 className="App-title text-center">Welcome to Roster Bots creator</h1>
                </header>

                <div className="" align="center">
                    <form onSubmit={this.handleSubmit}>
                        <label>Team Name (only letters or nothing) : </label>
                        <input className="input" type="text"
                               maxLength="10" onChange={this.handleTeamNameChange}/>
                        <button className="input btn-outline-primary" type="submit">Generate Roster!</button>
                    </form>
                </div>
                {this.state.displayMessage.length !== 0 &&
                <div className="text-center">
                    <p className="App-title">{this.state.displayMessage}</p>
                </div>
                }
                {this.state.roster !== '' && !this.state.displayLoader &&
                <div className="resultDiv">
                    <table className="table table-bordered table-hover">
                        <thead className="thead-inverse">
                        <tr>
                            <th colSpan="5" className="text-center">Starters</th>
                        </tr>
                        <tr>
                            <th>Player Name</th>
                            <th>Total Score</th>
                            <th>Speed</th>
                            <th>Strength</th>
                            <th>Agility</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.roster.starters.map(function(data, key){
                            return (
                                <tr key={key}>
                                    <td>{data.Name}</td>
                                    <td>{data.totalScore}</td>
                                    <td>{data.Speed}</td>
                                    <td>{data.Strength}</td>
                                    <td>{data.Agility}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                    <table className="table table-bordered table-hover">
                        <thead className="thead-inverse">
                        <tr>
                            <th colSpan="5" className="text-center">Substitutes</th>
                        </tr>
                        <tr>
                            <th>Player Name</th>
                            <th>Total Score</th>
                            <th>Speed</th>
                            <th>Strength</th>
                            <th>Agility</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.roster.substitutes.map(function(data, key){
                            return (
                                <tr key={key}>
                                    <td>{data.Name}</td>
                                    <td>{data.totalScore}</td>
                                    <td>{data.Speed}</td>
                                    <td>{data.Strength}</td>
                                    <td>{data.Agility}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
                }
                {this.state.roster === '' && this.state.displayLoader &&
                <div className="loader"/>
                }
            </div>
        );
    }
}

export default App;
