
import React from 'react';
import { ScrollView } from 'react-native';

const Component = ({ children, ...props }) => {
    return (
        <ScrollView {...props}>
            {children}
        </ScrollView>
    );
};

export default Component;
