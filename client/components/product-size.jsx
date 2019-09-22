import React from 'react';

export default class ProductSize extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            shoeSizeArr : [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15 ]
        }
    }

    render() {
        // debugger;
        console.log('shoe arr:', this.state);
        this.state.shoeSizeArr.map( element => {
            <div>{ element }</div>
            }
        )
    }
}