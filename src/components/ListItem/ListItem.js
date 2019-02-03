import React from 'react';
import { ListItem } from "native-base";

const Component = ({children, ...props}) => {
    return (
        <ListItem {...props}>
            {children}
        </ListItem>
    );
};

export default Component;
