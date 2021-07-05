import React, {FC} from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import {BusinessesDetail} from "../../../domain/model/Businesses";

const SearchResultItem: FC<SearchResultItemProperties> = ({business}) => {
    return (
        <View style={containerStyle}>
            <Image
                source={{uri: business.image_url}}
                style={imageStyle}
            />
            <Text style={titleStyle}>{business.name}</Text>
            <Text>{business.rating} Stars, {business.review_count} Reviews</Text>
        </View>
    );
};

const {containerStyle, imageStyle, titleStyle} = StyleSheet.create({
    containerStyle: {
        margin: 5
    },
    imageStyle: {
        borderRadius: 4,
        height: 120,
        width: 250
    },
    titleStyle: {
        fontWeight: "bold",
        marginTop: 10
    }
});

export interface SearchResultItemProperties {
    business: BusinessesDetail,
}

export default SearchResultItem;
