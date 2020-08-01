import React from 'react';

class Professor extends React.Component{

  constructor() {

    super()

    let user;
    let data;

    if(__isBrowser__) {
      user = window.__INITIAL_USER__;
      data = window.__INITIAL_DATA__;
    }
    this.state = {
      user,
      data
    }
  }

  neo = () => {
    if(this.state.data) {
      let actual = this.state.data.user;
      let fin = actual.filter(act => act._id == this.props.match.params.id);
      console.log(fin);

      return(
        <p>
          {fin.map(fi => (
            <p>
              <p>{fi.name}</p>
                <p>{fi.lastname}</p>
                  <p>{fi.email}</p>
                  <p>{fi.telephone ? 'Связаться: ' + fi.telephone : null}</p>
                  <p>{fi.city}</p>
                <p>{fi.raiting.length > 1 ? (fi.raiting.filter(rait => rait.length > 0).map(function(elt) {
                  return /^\d+$/.test(elt) ? parseInt(elt) : 0;
                }).reduce((a, b) => a + b, 0) / (fi.raiting.length - 1)).toFixed(1) : null}</p>
                <p>{fi.feedback.map(fee => (
                <p>{fee}</p>
              ))}</p>
            </p>
          ))}
        </p>
      )
    }
  }
  render() {
    return(
      <p>
        IAM
        {this.neo()}
      </p>
    )
  }
}

export default Professor;
