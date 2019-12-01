import React from 'react';
import Title from '../src/components/Title';
import Form from '../src/components/Form';
import Norris from '../src/components/Norris';


class App extends React.Component {
  state = {
    norrisFact: undefined,
    error: undefined
  }

  chuckIt = async (e) => {
    e.preventDefault();
    const term = e.target.elements.term.value;
    const apiCall = await fetch(`https://api.chucknorris.io/jokes/search?query=${term}`);
    const data = await apiCall.json();
    const total = data.total;
    const random = Math.floor(Math.random()*total);
    if (term && total > 0) {
    this.setState({
      norrisFact: data.result[random].value,
      error: undefined
    });} else if (term && total === 0){
      const errorArr = [
        "Chuck doesn't care about that.",
        "Chuck is not concerned with such things.",
        `Chuck gives exactly 0 fucks about ${term}.`,
        `Chuck wants no part of this "${term}" business.`
      ];
      this.setState({
        norrisFact: undefined,
        error: errorArr[Math.floor(Math.random()*4)]
      });
    } else {
      this.setState({
        norrisFact: undefined,
        error: "Enter SOMETHING! Christ..."
      }) 
    }

    
  }

  render () {
    return (
      <div>
        <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-5 title-container">
              <Title />
            </div>
            <div className="col-md-7">
              <div className="row">
                <div className="col form-container">
                  <Form chuckIt={this.chuckIt}/>
                </div>
              </div>
              <div className="row">
                <div className="col norris-fact">
                <Norris 
                norrisFact={this.state.norrisFact}
                error={this.state.error} />
                </div>
              </div>
            </div>
          </div>

        </div>
        </div>
      </div>
    )
  }
};
export default App;

            
            
          
            
