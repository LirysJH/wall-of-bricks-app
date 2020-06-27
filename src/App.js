import React, {Component} from 'react';
import './css/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      configDescData: {
        wallDescConfig:
        `Input example:\r\n101101111111111111`,
        bricksDescConfig: 
        `Input example:\r\n114126131`
      },
      inputData: {
        rows: 0,
        columns: 0,
        wallTextData: "",
        bricksTextData: "",
        wallData: [],
        bricksData: []
      },
      result: "No"
    };
  }

  onColumnsChange = async (event) => {
    await this.setState({
      inputData: {
        columns: +event.target.value.trim(),
      }
    });
  }

  onRowsChange = async (event) => {
    await this.setState({
      inputData: {
        rows: +event.target.value.trim(),
      }
    });
  }

  onWallChangeData = async (event) => {
    await this.setState({
      inputData: {
        wallTextData: event.target.value.trim(),
      }
    });

    let arr = [];

    [...this.state.inputData.wallTextData].map(symb => arr.push(symb));

    await this.setState({
      inputData: {
        wallData: arr,
      }
    });
  }

  onBricksChangeData = async (event) => {
    await this.setState({
      inputData: {
        bricksTextData: event.target.value.trim(),
      }
    });

    let arr = [];

    [...this.state.inputData.bricksTextData].map(symb => arr.push(symb));

    await this.setState({
      inputData: {
        bricksData: arr,
      }
    });
  }

  render() {

    return(
      <div className="App">
        <main>
          <section>
            <h3 className="title">
              Wall structure config
            </h3>
            <p>
              Matrix size - i x j; i - columns, j - rows.
            </p>
            <div className="container">
              <label>
                i:
                <input className="matrix-size columns"
                      type="number"
                      value={this.state.inputData.columns}
                      onChange={this.onColumnsChange} />
              </label>
              <label>
                j:
                <input className="matrix-size rows"
                      type="number"
                      value={this.state.inputData.rows}
                      onChange={this.onRowsChange} />
              </label>
              
              <textarea className="config config-wall"
                        cols="30"
                        rows="5"
                        placeholder={this.state.configDescData.wallDescConfig}
                        value={this.state.inputData.wallTextData}
                        onChange={this.onWallChangeData} ></textarea>
            </div>
            <p>
              Description: 0 - hole; 1 - brick.
            </p>
            <hr />
            <h3 className="title">
              Bricks config
            </h3>
            <textarea className="config config-bricks"
                      cols="30"
                      rows="5"
                      placeholder={this.state.configDescData.bricksDescConfig}
                      name="bricksTextData"
                      value={this.state.inputData.bricksTextData}
                      onChange={this.onBricksChangeData}  ></textarea>
            <p>
              Each brick has got three digits.
              First digit - height,
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
