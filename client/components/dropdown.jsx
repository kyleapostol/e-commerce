import React from "react";

export default class Dropdown extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            size : null,
            userInput : 'size'
        }
        this.handleSizeOption = this.handleSizeOption.bind(this);
    }
    handleSizeOption(size){
        this.setState({ size : size })
        this.setState({ userInput : size })
    }

    render(){
        console.log("size ", this.state.size);
        return(
            <div>
                <div className="dropdown mt-4 mb-4">
                    <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {this.state.userInput}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" onClick={ () => this.handleSizeOption(6) }>6</a>
                        <a className="dropdown-item" onClick={ () => this.handleSizeOption(7) }>7</a>
                        <a className="dropdown-item" onClick={ () => this.handleSizeOption(8) }>8</a>
                        <a className="dropdown-item" onClick={ () => this.handleSizeOption(9) }>9</a>
                        <a className="dropdown-item" onClick={ () => this.handleSizeOption(10) }>10</a>
                        <a className="dropdown-item" onClick={ () => this.handleSizeOption(11) }>11</a>
                        <a className="dropdown-item" onClick={ () => this.handleSizeOption(12) }>12</a>
                        <a className="dropdown-item" onClick={ () => this.handleSizeOption(13) }>13</a>
                        <a className="dropdown-item" onClick={ () => this.handleSizeOption(14) }>14</a>
                    </div>
                </div>
            </div>
        )
    }
}