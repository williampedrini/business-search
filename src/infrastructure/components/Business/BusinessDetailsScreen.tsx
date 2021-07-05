import React, {useEffect, useState} from 'react';
import {FlatList, Image, View, StyleSheet, Text} from "react-native";
import {StackNavigationProp} from "react-navigation-stack/lib/typescript/src/vendor/types";
import {searchBusinessById} from "../../../domain/services/Business.service"
import {BusinessDetail} from "../../../domain/model/BusinessDetail";

const BusinessDetailsScreen = (props: BusinessDetailsScreenProperties) => {
    const [business, setBusiness] = useState({} as BusinessDetail);

    useEffect(() => {
        const id: number = props.navigation.getParam("id");
        searchBusinessById(id)
            .then((business) => setBusiness(business));
    }, [])

    if (business.id) {
        return (
            <View>
                <Text style={titleStyle}>{business.name}</Text>
                <FlatList
                    data={business.photos}
                    keyExtractor={(photo) => photo}
                    renderItem={({item}) => {
                        return <Image source={{uri: item}} style={imageStyle}/>
                    }}
                />
            </View>
        );
    }
    return null;
};

const {imageStyle, titleStyle} = StyleSheet.create({
    imageStyle: {
        borderRadius: 4,
        height: 120,
        margin: 10,
        width: 250
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 10
    }
})

export interface BusinessDetailsScreenProperties {
    navigation: StackNavigationProp
}

export default BusinessDetailsScreen;
