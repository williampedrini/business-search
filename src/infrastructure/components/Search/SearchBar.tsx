import React, {FC} from 'react';
import {TextInput, View, StyleSheet} from "react-native";
import {AntDesign} from '@expo/vector-icons';

const SearchBar: FC<SearchBarProperties> = ({onTermChange, onTermSubmit, term}) => {
    return (
        <View style={containerStyle}>
            <AntDesign style={iconStyle} name="search1"/>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(newTerm: String) => onTermChange(newTerm)}
                onEndEditing={() => onTermSubmit()}
                placeholder="Search Bar"
                style={inputStyle}
                value={term}
            />
        </View>
    );
};

const {containerStyle, iconStyle, inputStyle} = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#F0EEEE',
        borderRadius: 5,
        flexDirection: "row",
        height: 40,
        margin: 10
    },
    iconStyle: {
        alignSelf: "center",
        color: "black",
        fontSize: 30,
        marginHorizontal: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    }
});

export interface SearchBarProperties {
    onTermChange: Function;
    onTermSubmit: Function;
    term: string;
}

export default SearchBar;
