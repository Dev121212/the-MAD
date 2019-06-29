import React from "react";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [
        { id: 0, pair: 0, name: "A", open: false },
        { id: 1, pair: 4, name: "E", open: false },
        { id: 2, pair: 1, name: "B", open: false },
        { id: 3, pair: 6, name: "G", open: false },
        { id: 4, pair: 2, name: "C", open: false },
        { id: 5, pair: 0, name: "A", open: false },
        { id: 6, pair: 3, name: "D", open: false },
        { id: 7, pair: 3, name: "D", open: false },
        { id: 8, pair: 5, name: "F", open: false },
        { id: 9, pair: 6, name: "G", open: false },
        { id: 10, pair: 4, name: "E", open: false },
        { id: 11, pair: 2, name: "C", open: false },
        { id: 12, pair: 7, name: "H", open: false },
        { id: 13, pair: 5, name: "F", open: false },
        { id: 14, pair: 7, name: "H", open: false },
        { id: 15, pair: 1, name: "B", open: false }
      ],
      selected1: false,
      selected2: false
    };
  }

  handleClick = id => {
    console.log(document.getElementById(id).id);
    this.state.allData.map(data => {
      if (data.id === document.getElementById(id).id) {
        this.setState({ open: false });
      }
    });
    // this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.state.allData[0].name);
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
                  height: " 150px",
                  width: " 150px",
                  padding: "20px",
                  fontSize: "80px"
                }}
                id={data.id}
                pair={data.pair}
                value={data.pair}
                onClick={e => {
                  e.preventDefault();
                  this.handleClick(data.id);
                }}
                name={data.id}
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
