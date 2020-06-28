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
        columns: 6,
        rows: 3,
        wallTextData: "",
        bricksTextData: "",
        wallData: [],
        bricksData: []
      },
      calcData: {
        wallSets: [],
        brickSets: []
      },
      result: "No"
    };
  }

  onColumnsChange = async (event) => {
    await this.setState({
      ...this.state,
      inputData: {
        ...this.state.inputData,
        columns: +event.target.value.trim()
      }
    });
  }

  onRowsChange = async (event) => {
    await this.setState({
      ...this.state,
      inputData: {
        ...this.state.inputData,
        rows: +event.target.value.trim()
      }
    });
  }

  onWallChangeData = async (event) => {
    await this.setState({
      ...this.state,
      inputData: {
        ...this.state.inputData,
        wallTextData: event.target.value.trim(),
      }
    });

    let arr = [];

    [...this.state.inputData.wallTextData].map(symb => arr.push(+symb));

    await this.setState({
      inputData: {
        ...this.state.inputData,
        wallData: arr
      }
    });
  }

  onBricksChangeTextData = async (event) => {
    await this.setState({
      ...this.state,
      inputData: {
        ...this.state.inputData,
        bricksTextData: event.target.value.trim(),
      }
    });

    let arr = [];

    [...this.state.inputData.bricksTextData].map(symb => arr.push(+symb));

    await this.setState({
      inputData: {
        ...this.state.inputData,
        bricksData: arr
      }
    });
  }

  getWallStruct = (array, cols, matrix) => {
    let i = 1,
        j = 1,
        arr = [],
        data = [];

    array.forEach(el => {
  
      if (el !== 0) {
        arr.push(el);
      }

      if (el === 0 || i%cols === 0) {
        if (arr.length >= 1) {
          data.push(arr);
          arr = [];
        }
      }
        
        i++;

        if (i%cols === 0 && i < matrix) {
          j++;
        }

      });

      return data;
  }

  getBricks = (array) => {
    let i = 1,
        arr = [],
        data = [];

      array.map(el => {
        
        arr.push(el);

        if (i%3 === 0 && arr.length > 0) {
          data.push(arr);
          arr = [];
        }

        i++;
      });

    return data;
  }

  onSumbit = () => {

    console.log("Clicked button");

    //101101111111111111 114126131

    let wall = this.state.inputData.wallData,
        bricks = this.state.inputData.bricksData,
        cols = this.state.inputData.columns,
        rows = this.state.inputData.rows,
        matrix = cols*rows,
        dataWallStruct = [],
        dataBricks = [];

    /*console.log("[1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1]");
    console.log("this.state.inputData.wallData - ", this.state.inputData.wallData);
    console.log("this.state.inputData.bricksData - ", this.state.inputData.bricksData);
    console.log("wall - ", wall);
    console.log("wall.length - ", wall.length);
    console.log("bricks - ", bricks);
    console.log("bricks.length - ", bricks.length);
    console.log("cols - ", cols);
    console.log("rows - ", rows);
    console.log("matrix - ", matrix);*/

    if (wall.length === matrix && bricks.length%3 === 0) {

      dataWallStruct = this.getWallStruct(wall, cols, matrix);
      console.log("dataWallStruct - ", dataWallStruct);

      dataBricks = this.getBricks(bricks);
      console.log("dataBricks - ", dataBricks);

    } else {
      alert("Input data is wrong");
    }
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
                      value={this.state.inputData.bricksTextData}
                      onChange={this.onBricksChangeTextData}  ></textarea>
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
                    type="button"
                    onClick={this.onSumbit} >
                      Submit
            </button>
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
