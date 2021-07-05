import React, {FC} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {BusinessesDetail} from "../../../domain/model/Businesses";
import SearchResultItem from "./SearchResultItem";
import {withNavigation} from "react-navigation"
import {StackNavigationProp} from "react-navigation-stack/lib/typescript/src/vendor/types";

const SearchResultList: FC<SearchResultListProperties> = ({businesses, navigation, title}) => {
    if (businesses.length === 0) {
        return null;
    }
    return (
        <View style={containerStyle}>
            <Text style={titleStyle}>{title}</Text>
            <FlatList
                data={businesses}
                horizontal
                keyExtractor={(business: BusinessesDetail) => business.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate("BusinessDetailsScreen", {
                                id: item.id
                            })
                        }}>
                            <SearchResultItem business={item}/>
                        </TouchableOpacity>
                    )
                }}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const {containerStyle, titleStyle} = StyleSheet.create({
    containerStyle: {
        marginBottom: 10
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 10
    }
});

export interface SearchResultListProperties {
    businesses: BusinessesDetail[],
    navigation: StackNavigationProp,
    title: string
}

export default withNavigation(SearchResultList);
