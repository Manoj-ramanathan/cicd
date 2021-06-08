import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.handleChangeFile = this.handleChangeFile.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);
    

    this.state = {
      id: null,
      name: "",
      address: "", 
      productfile:null,

      submitted: false
    };
  }

  onChangeTitle(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      address: e.target.value
    });
  }
  handleChangeFile(e){
    this.setState({productfile:e.target.files[0]});
  }
  saveTutorial() {
    let data = new FormData();    
    data.append('name',this.state.name);
    data.append('address',this.state.address);
    data.append('productfile',this.state.productfile);


    TutorialDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          address: response.data.address,
          productfile: response.data.productfile,

          submitted: true
        });
        console.log(response.data);
      })
      // .catch(e => {
      //   console.log(e);
      // });
  }

  newTutorial() {
    this.setState({
      id: null,
      name: "",
      address: "",


      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeTitle}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                required
                value={this.state.address}
                onChange={this.onChangeDescription}
                name="address"
              />
            </div>

            <div class="form-group">
                        <label>Files:</label>
                        <input
                        type="file"
                            name="productfile"
                          //  value={this.state.file.name}
                            onChange={this.handleChangeFile}
                           // placeholder="Enter comment"
                            class="form-control" />
                    </div>
                    <br></br>
                    

            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
    
  }
// {/* <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">First</th>
//       <th scope="col">Last</th>
//       <th scope="col">Handle</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td>Larry</td>
//       <td>the Bird</td>
//       <td>@twitter</td>
//     </tr>
//   </tbody>
// </table> */}
}
 