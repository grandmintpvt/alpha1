import { Navigation } from "react-native-navigation";
import LoginScreen from "./src/screens/Login/Login";
import RegisterScreen from "./src/screens/Register/Register";
//Register Screen
Navigation.registerComponent("earn-it.LoginScreen",()=>LoginScreen);
Navigation.registerComponent("earn-it.RegisterScreen",()=>RegisterScreen);
//Start App
Navigation.startSingleScreenApp({
  screen:{
    screen:"earn-it.LoginScreen",
    navigatorStyle:{
     
      navBarHidden: true
    },
    
  }
})