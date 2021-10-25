import React from 'react';

export default function Contact() {
  const styles = {
    textArea: {
      height: "100px",
      width: "400px"
    },
    input: {
      width: "400px",
      marginTop: "15px"
    }
  }

  return (
    <div>
      <h1>Contact Page</h1>

    <div className="container-fluid d-flex justify-content-center">
      <div className="form-floating">
        <input type="text" className="form-control" id="floatingName" placeholder="Name" style={styles.input}></input>
        <label for="floatingName">Name</label>
      </div>
    </div>
    <div className="container-fluid d-flex justify-content-center">
      <div className="form-floating mb-3">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" style={styles.input}></input>
        <label for="floatingInput">Email address</label>
      </div>
    </div>
    <div className="container-fluid d-flex justify-content-center">
      <div className="form-floating">
        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={styles.textArea}></textarea>
        <label for="floatingTextarea2">Message</label>
      </div>
    </div>

    </div>
  );
}
