import React, { Component } from 'react';
import './style.css';

const arr = [
    { id: 1, match: 1, pic: require('../images/1.jpg') },
    { id: 2, match: 2, pic: require('../images/2.jpg') },
    { id: 3, match: 3, pic: require('../images/3.jpg') },
    { id: 4, match: 4, pic: require('../images/4.jpg') },
    { id: 5, match: 5, pic: require('../images/5.jpg') },
    { id: 6, match: 6, pic: require('../images/6.jpg') },
    { id: 7, match: 7, pic: require('../images/7.jpg') },
    { id: 8, match: 8, pic: require('../images/8.jpg') },
    { id: 9, match: 1, pic: require('../images/1.jpg')  },
    { id: 10, match: 2, pic: require('../images/2.jpg') },
    { id: 11, match: 3, pic: require('../images/3.jpg') },
    { id: 12, match: 4, pic: require('../images/4.jpg') },
    { id: 13, match: 5, pic: require('../images/5.jpg') },
    { id: 14, match: 6, pic: require('../images/6.jpg') },
    { id: 15, match: 7, pic: require('../images/7.jpg') },
    { id: 16, match: 8, pic: require('../images/8.jpg') },
]

export class GameContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
             counter: 0,
             selected1: null,
            selected2: null,
            openboxid1: null,
            openboxid2: null,
            matchedIds: []

        }
    }
    



    boxClicked = async (boxid, match) => {
        await this.setState({
            counter: this.state.counter + 1
        });

        if(this.state.counter > 2){
            this.setState({
                counter: 0
            })
        }

        console.log(boxid);
        let elem = document.getElementById(`b+${boxid}`);
        elem.style.opacity = 1
        console.log(elem);

        if(this.state.selected1 === null){
            await this.setState({
                selected1: match,
                openboxid1: boxid
            })
        }else{
            if(boxid !== parseInt(this.state.selected1)){
                await this.setState({
                    selected2: match,
                    openboxid2: boxid
                })
            }
        }

        
        if(this.state.selected1 && this.state.selected2 ){
            if (this.state.selected1 === this.state.selected2) {
                let a = [...this.state.matchedIds]
                a.push(parseInt(this.state.openboxid1));
                a.push(parseInt(this.state.openboxid2));

                await this.setState({
                    matchedIds: a,
                    selected1: null,
                    selected2: null,
                    openboxid2: null,
                    openboxid1: null
                })
            }else{
                console.log(this.state.openboxid1);
                console.log(this.state.openboxid2);

                let elem1 = document.getElementById(`b+${this.state.openboxid1}`);
                elem1.style.opacity = 0;
                let elem2 = document.getElementById(`b+${this.state.openboxid2}`);
                elem2.style.opacity = 0;
                await this.setState({
                    selected1: null,
                    selected2: null,
                    openboxid2: null,
                    openboxid1: null
                })
            }
        }else{
            return null;
        }

    }

    render() {
        console.log(this.state);
        
        return (
            <div className="grid-container">
                {arr.map((d, i) => {

                    return (
                        <div className="grid-item" onClick={() => this.boxClicked(d.id, d.match)} >
                            <img src={d.pic} height="150px" width="100px" style={{ opacity: this.state.matchedIds.includes(d.id) ? "1" : "0", pointerEvents: this.state.matchedIds.includes(d.id) === d.id ? "none": "auto"}} id={`b+${d.id}`} />
                        </div>
                    )

                })}
            </div>
        )
    }
}

export default GameContainer





//<img src={d.pic} height="150px" width="100px" style={{ opacity: this.state.matchedIds.includes(d.id) ? "1" : "0", pointerEvents: this.state.matchedIds.includes(d.id) || parseInt(this.state.openboxid1) === d.id || parseInt(this.state.openboxid2) === d.id ? "none": "auto"}} id={`b + ${ d.id }`} />
