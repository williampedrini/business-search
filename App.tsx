import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import BusinessSearchScreen from "./src/infrastructure/components/Business/BusinessSearchScreen";
import BusinessDetailsScreen from "./src/infrastructure/components/Business/BusinessDetailsScreen";

const navigator = createStackNavigator({
    BusinessDetailsScreen: BusinessDetailsScreen,
    BusinessSearchScreen: BusinessSearchScreen
}, {
    initialRouteName: 'BusinessSearchScreen',
    defaultNavigationOptions: {
        title: "iFood"
    }
});

export default createAppContainer(navigator);
