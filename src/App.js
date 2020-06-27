import React, {Component} from 'react';
import './css/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      configDescData: {
        wallDescConfig:
        `\r
        Input example:\r
        101101\r
        111111\r
        111111\r\n
        or\r\n
        101101111111111111`,
        bricksDescConfig: 
        `\r
        Input example:\r
        114\r
        126\r
        131\r\n
        or\r\n
        114126131`
      },
      inputData: {
        wallTextData: "",
        bricksTextData: "",
        wallData: [],
        bricksData: []
      },
      result: "No"
    };
  }

  onChangeWallData = (event) => {
    this.setState({
      inputData: {
        wallTextData: event.target.value
      }
    });

    console.log(this.state.inputData.wallTextData);
  }

  onChangeBricksData = (event) => {
    
  }

  render() {

    return(
      <div className="App">
        <main>
          <section>
            <h3 className="title">
              Wall structure config
            </h3>
            <textarea className="config config-wall"
                      cols="40"
                      rows="10"
                      placeholder={this.state.configDescData.wallDescConfig}
                      value={this.state.inputData.wallTextData}
                      onChange={this.onChangeWallData} ></textarea>
            <p>
              Description: 1 - brick; 0 - hole.
            </p>
            <hr />
            <h3 className="title">
              Bricks config
            </h3>
            <textarea className="config config-bricks"
                      cols="40"
                      rows="10"
                      placeholder={this.state.configDescData.bricksDescConfig}
                      value={this.state.inputData.bricksTextData}
                       ></textarea>
            <p>
              Description: first digit - height,
                          second digit - width,
                          third digit - amount of bricks of such type.
            </p>
          </section>
          <hr />
          <section>
            <h3 className="title">
              Result
            </h3>
            <button className="submit-btn"
                    type="button">Submit</button>
            <p>
              Answer: {this.state.result}
            </p>
          </section>
        </main>
        <hr />
        <footer>
          <p>
            Created by
            &nbsp;
            <a className="mailto"
                href="mailto:snslirys@gmail.com?subject=Wall-of-Bricks-App">
                  Lirys
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
