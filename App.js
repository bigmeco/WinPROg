import React from "react";
import index from "./Src/screens/HomeScreen";
import {Drawer, Router, Scene} from "react-native-router-flux";
import SettingScreen from "./Src/screens/SettingScreen";

const App = () => {
    return (
        <Router>
          <Scene key="root" hideNavBar="true">


            <Scene key="home" component={ index } title="Qr AntiFake" initial/>
            <Scene key="setting" component={ SettingScreen } title="Settings" />
          </Scene>
        </Router>
    );
};

export default App;