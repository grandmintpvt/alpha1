import { Navigation } from "react-native-navigation";

const start = () => {
    Navigation.startSingleScreenApp({
        screen: {
            screen: "earn-it.LoginScreen",
            navigatorStyle: {

                navBarHidden: true
            },
        }
    })
}
export default start;
