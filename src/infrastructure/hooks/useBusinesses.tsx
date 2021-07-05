import {useEffect, useState} from "react";
import {searchBusinesses} from "../../domain/services/Business.service";
import {BusinessesDetail} from "../../domain/model/Businesses";

export default (): UseBusinessesHookResult => {
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [businesses, setBusinesses] = useState<BusinessesDetail[]>([]);

    const search = async (term: string) => {
        try {
            let result = await searchBusinesses({
                limit: 50,
                location: 'san jose',
                term: term,
            })
            setBusinesses(result.businesses);
            setErrorMessage("");
        } catch (error: any) {
            setErrorMessage("Something went wrong while performing the search.")
        }
    }

    useEffect(() => {
        search("pasta")
    }, [])

    return {
        errorMessage,
        businesses,
        search
    };
}

export interface UseBusinessesHookResult {
    errorMessage: string;
    businesses: BusinessesDetail[],
    search: Function
}
