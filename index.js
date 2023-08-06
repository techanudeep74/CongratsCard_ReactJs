const element = (
  // Write your code here.
  <div className="greeting-card-container">
    <h1 className="main-heading">Congratulations</h1>
    <div className="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="logo"
      />
      <h1 className="card-heading">Kiran V</h1>
      <p className="card-description">
        Vishnu Institute of Computer Education and Technology Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="logo"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
