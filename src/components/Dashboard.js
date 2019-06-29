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
        <div
          style={{ display: "flex", flexWrap: "wrap", backgroundColor: "red" }}
        >
          {this.state.allData.map(data => {
            return (
              <div
                style={{
                  display: "flex",
                  height: " 200px",
                  width: " 200px",
                  padding: "20px",
                  fontSize: "80px"
                }}
              >
                {data.name}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Dashboard;
