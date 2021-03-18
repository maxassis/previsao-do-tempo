import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./pages/Home";
import Search from "./pages/Search";

const Drawer = createDrawerNavigator();

function Routes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Inicio" component={Home} />
      <Drawer.Screen name="Pesquisar" component={Search} />
    </Drawer.Navigator>
  );
}

export default Routes;
