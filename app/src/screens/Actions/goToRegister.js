import { Navigation } from "react-native-navigation";

const start = () => {
    Navigation.startSingleScreenApp({
        screen: {
            screen: "earn-it.RegisterScreen",
            navigatorStyle: {

                navBarHidden: true
            },
        }
    })
};
export default start;