import React, { useState, useContext } from "react";
import MapView, { Circle } from "react-native-maps";
import { StyleSheet, View, SafeAreaView,Image, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AuthContext } from "../store/auth-context";


const MainScreen = () => {
  const [circlePosition, setCirclePosition] = useState(null);
  const authCtx = useContext(AuthContext);

  const handleMapPress = (e) => {
    // Update the position whenever the user clicks on the map
    setCirclePosition(e.nativeEvent.coordinate);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity style={styles.icon}>
          <FontAwesome name="user-circle" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onClick={()=>authCtx.logout()} style={styles.profile}>
          <Image
            style={styles.image}
            source={{
              uri: "https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
            }}
          />
          <Text style={styles.text}>100 Martinique Ave</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <AntDesign name="message1" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 1.28675,
          longitude: 103.84775,
          latitudeDelta: 0.009,
          longitudeDelta: 0.009,
        }}
        onPress={handleMapPress}
      >
        {circlePosition && (
          <Circle center={circlePosition} radius={20} fillColor="white" />
        )}
      </MapView>
      <View style={styles.bottomSheet}>
        <View style={styles.line} />
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  nav: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "transparent",
    width: "100%",
    alignItems: "center",
    zIndex: 1,
    top: 0,
    marginTop: 30,
  },
  icon: {
    backgroundColor: "#26292d",
    padding: 10,
    borderRadius: 50,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#26292d",
    paddingHorizontal: 10,
    borderRadius: 50,
    paddingVertical: 5,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
  bottomSheet: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 50,
    backgroundColor: "#26292d",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  line: {
      width: 50,
      height: 5,
      backgroundColor: "gray",
      borderRadius: 10,
      margin: 10,
      alignSelf: "center",
  },
});
