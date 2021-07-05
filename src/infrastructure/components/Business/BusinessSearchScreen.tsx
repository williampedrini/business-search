import React, {useState} from 'react';
import {Text, StyleSheet, ScrollView} from "react-native";
import SearchBar from "../Search/SearchBar";
import useBusinesses from "../../hooks/useBusinesses";
import SearchResultList from "../Search/SearchResultList";
import {BusinessPrice} from "../../../domain/model/BusinessPrice";

const BusinessSearchScreen = () => {
    const [term, setTerm] = useState<string>("");
    const {errorMessage, businesses, search} = useBusinesses();

    /**
     * Filter the current businesses list by a certain price type.
     *
     * @param price The price type used to perform the filtering.
     * @return The filtered list.
     */
    const filterBusinessesByPrice = (price: BusinessPrice) => {
        return businesses.filter(business => business.price === price)
    }

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={(newTerm: string) => setTerm(newTerm)}
                onTermSubmit={() => search(term)}
            />
            {
                errorMessage === "" ? null : <Text style={messageStyle}>{errorMessage}</Text>
            }
            <ScrollView>
                <SearchResultList
                    businesses={filterBusinessesByPrice(BusinessPrice.LOW_COST)}
                    title="Low Cost"
                />
                <SearchResultList
                    businesses={filterBusinessesByPrice(BusinessPrice.MODEST)}
                    title="Modest Cost"
                />
                <SearchResultList
                    businesses={filterBusinessesByPrice(BusinessPrice.EXPENSIVE)}
                    title="Expensive"
                />
            </ScrollView>
        </>
    );
};

const {containerStyle, messageStyle} = StyleSheet.create({
    messageStyle: {
        margin: 10
    },
    containerStyle: {
        backgroundColor: '#FFFFFF',
        flex: 1
    }
});

export default BusinessSearchScreen;
