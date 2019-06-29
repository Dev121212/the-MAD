import React from "react";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [
        { id: 0, name: "A" },
        { id: 4, name: "E" },
        { id: 1, name: "B" },
        { id: 6, name: "G" },
        { id: 2, name: "C" },
        { id: 0, name: "A" },
        { id: 3, name: "D" },
        { id: 3, name: "D" },
        { id: 5, name: "F" },
        { id: 6, name: "G" },
        { id: 4, name: "E" },
        { id: 2, name: "C" },
        { id: 7, name: "H" },
        { id: 5, name: "F" },
        { id: 7, name: "H" },
        { id: 1, name: "B" }
      ]
    };
  }

  render() {
    return (
      <div>
        <div>The MAD</div>
        <div>The MAD</div>
      </div>
    );
  }
}

export default Dashboard;
