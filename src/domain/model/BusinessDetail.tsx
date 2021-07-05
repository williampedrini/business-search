import BusinessCategory from "./BusinessCategory";
import BusinessCenter from "./BusinessCenter";
import {BusinessPrice} from "./BusinessPrice";

export interface BusinessDetail {
    id:            string;
    alias:         string;
    name:          string;
    image_url:     string;
    is_claimed:    boolean;
    is_closed:     boolean;
    url:           string;
    phone:         string;
    display_phone: string;
    review_count:  number;
    categories:    BusinessCategory[];
    rating:        number;
    location:      BusinessDetailLocation;
    coordinates:   BusinessCenter;
    photos:        string[];
    price:         BusinessPrice;
    hours:         BusinessDetailHour[];
    transactions:  any[]; //
    special_hours: BusinessDetailSpecialOpenHour[];
}

export interface BusinessDetailHour {
    open:        BusinessDetailOpenTime[];
    hours_type:  string;
    is_open_now: boolean;
}

export interface BusinessDetailOpenTime {
    is_overnight: boolean;
    start:        string;
    end:          string;
    day:          number;
}

export interface BusinessDetailLocation {
    address1:        string;
    address2:        string;
    address3:        string;
    city:            string;
    zip_code:        string;
    country:         string;
    state:           string;
    display_address: string[];
    cross_streets:   string;
}

export interface BusinessDetailSpecialOpenHour {
    date:         Date;
    is_closed:    null;
    start:        string;
    end:          string;
    is_overnight: boolean;
}
