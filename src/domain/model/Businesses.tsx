import BusinessCategory from './BusinessCategory'
import BusinessCenter from './BusinessCenter'
import {BusinessPrice} from "./BusinessPrice";

export interface Businesses {
    total:      number;
    businesses: BusinessesDetail[];
    region:     BusinessesRegion;
}

export interface BusinessesDetail {
    rating:       number;
    price:        BusinessPrice;
    phone:        string;
    id:           string;
    alias:        string;
    is_closed:    boolean;
    categories:   BusinessCategory[];
    review_count: number;
    name:         string;
    url:          string;
    coordinates:  BusinessCenter;
    image_url:    string;
    location:     BusinessesDetailLocation;
    distance:     number;
    transactions: string[];
}

export interface BusinessesDetailLocation {
    city:     string;
    country:  string;
    address2: string;
    address3: string;
    state:    string;
    address1: string;
    zip_code: string;
}

export interface BusinessesQueryParameter {
    limit: number;
    location: string;
    term: string;
}

export interface BusinessesRegion {
    center: BusinessCenter;
}
