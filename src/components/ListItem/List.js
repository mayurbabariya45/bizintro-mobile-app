import React from 'react';
import { List } from "native-base";

const Component = ({children , ...props}) => {
    return (
        <List {...props}>
            {children}
        </List>
    );
};

export default Component;
