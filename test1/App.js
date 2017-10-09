import React from "react";
import index from "./Src/screens/HomeScreen";
import { Router, Scene} from "react-native-router-flux";
import SettingScreen from "./Src/screens/SettingScreen";

const App = () => {
    return (
        <Router>
          <Scene key="root" hideNavBar="true">
              <Scene
                  key="tabbar"
                  tabs={true}
                  tabBarStyle={{ backgroundColor: '#red' }}
              >
                  {/* Tab and it's scenes */}
                  <Scene key="osu" title="OSU" >
                      <Scene
                          key="scarlet"
                          component={SettingScreen}
                          title="Scarlet"
                      />
                      <Scene
                          key="gray"
                          component={SettingScreen}
                          title="Gray"
                      />
                  </Scene>

                  {/* Tab and it's scenes */}
                  <Scene key="um" title="UM" >
                      <Scene
                          key="blue"
                          component={SettingScreen}
                          title="Blue"
                      />
                      <Scene
                          key="maize"
                          component={SettingScreen}
                          title="Maize"
                      />
                  </Scene>

              </Scene>
            <Scene key="home" component={ index } title="Qr AntiFake" initial/>
            <Scene key="setting" component={ SettingScreen } title="Settings" />
          </Scene>
        </Router>
    );
};

export default App;