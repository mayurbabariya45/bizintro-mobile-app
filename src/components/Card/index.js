import React, { Component } from 'react';
import CardScrollView from "./CardScroll"; 

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { items, ...props } = this.props;
        return (
            <CardScrollView 
                items={items}
                {...props}
            />
        );
    }
}



export default Card;
