import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import * as Location from "expo-location";

import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Conditions from "../../components/Conditions";
import Forecast from "../../components/Forecast/index";
import api, { key } from "../../services/api";

const mylist = [
  {
    date: "17/03",
    weekday: "Qua",
    max: 29,
    min: 18,
    description: "Tempestades",
    condition: "storm",
  },
  {
    date: "18/03",
    weekday: "Qui",
    max: 27,
    min: 19,
    description: "Tempestades",
    condition: "storm",
  },
  {
    date: "19/03",
    weekday: "Sex",
    max: 26,
    min: 19,
    description: "Tempestades",
    condition: "storm",
  },
  {
    date: "20/03",
    weekday: "Sáb",
    max: 27,
    min: 17,
    description: "Tempestades isoladas",
    condition: "storm",
  },
  {
    date: "21/03",
    weekday: "Dom",
    max: 28,
    min: 18,
    description: "Ensolarado",
    condition: "clear_day",
  },
  {
    date: "22/03",
    weekday: "Seg",
    max: 29,
    min: 19,
    description: "Parcialmente nublado",
    condition: "cloudly_day",
  },
  {
    date: "23/03",
    weekday: "Ter",
    max: 29,
    min: 18,
    description: "Parcialmente nublado",
    condition: "cloudly_day",
  },
  {
    date: "24/03",
    weekday: "Qua",
    max: 30,
    min: 18,
    description: "Ensolarado com muitas nuvens",
    condition: "cloudly_day",
  },
  {
    date: "25/03",
    weekday: "Qui",
    max: 25,
    min: 19,
    description: "Tempestades",
    condition: "storm",
  },
  {
    date: "26/03",
    weekday: "Sex",
    max: 27,
    min: 17,
    description: "Parcialmente nublado",
    condition: "cloudly_day",
  },
];

export default function Home() {
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();

      if (status !== "granted") {
        serErrorMsg("Permissão Negada para acessar localização");
        setLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const response = await api.get(
        `/weather?key=${key}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`
      );
      setWeather(response.data);
      console.log(response.data);
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Menu />
      <Header />
      <Conditions />

      <FlatList
        horizontal={true}
        style={styles.list}
        data={mylist}
        contentContainerStyle={{ paddingBottom: "5%" }}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => <Forecast data={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e8f0ff",
    paddingTop: "5%",
  },
  list: {
    marginTop: 10,
    marginLeft: 10,
  },
});
