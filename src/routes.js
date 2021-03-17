import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./pages/Home";
import Search from "./pages/Search";

const Drawer = createDrawerNavigator();

function Routes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Minha Cidade" component={Home} />
      <Drawer.Screen name="Procurar" component={Search} />
    </Drawer.Navigator>
  );
}

export default Routes;
