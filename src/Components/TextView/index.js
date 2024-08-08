import React from 'react';
import { View, Text } from 'react-native';

const TextView = ({ label, head, link, textAlign, body, color }) => {
    return (
        <View>
            <Text
                style={head ? {
                    fontWeight: '600',
                    color: color ? color : '#FFF',
                } : link ? {
                    color: '#000',
                    textDecorationLine: 'underline',
                    textAlign: textAlign ? textAlign : 'auto',
                } : body ? {
                    color: '#000',
                } : {
                    color: '#FFF',
                }}
            >
                {label}
            </Text>
        </View >
    );
};

export default TextView;