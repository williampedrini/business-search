import axios from 'axios';
import {BusinessesQueryParameter, Businesses} from "../model/Businesses";
import {BusinessDetail} from "../model/BusinessDetail";

const CLIENT = axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer <YELP_API_TOKEN>" //Change to the Yelp API.
    }
});

/**
 * Performs a search for all the existing businesses registered on the YELP platform.
 *
 * @param queryParameters The query parameters used to filter the results.
 * @return A promise with the wrapper containing all the found businesses.
 */
export async function searchBusinesses(queryParameters: BusinessesQueryParameter): Promise<Businesses> {
    let response = await CLIENT.get('/search', {
        params: queryParameters
    })
    return response.data as Businesses
}

/**
 * Performs a search for a certain business based on its identifier.
 *
 * @param id The identifier of the business.
 * @return A promise with the wrapper containing all the found businesses.
 */
export async function searchBusinessById(id: number): Promise<BusinessDetail> {
    let response = await CLIENT.get(`/${id}`)
    return response.data as BusinessDetail
}
