import React, { useState, useContext } from "react";
import MapView, { Circle } from "react-native-maps";
import { StyleSheet, View, SafeAreaView,Image, Text, TouchableOpacity, Modal, Button } from "react-native";
import { AuthContext } from "../store/auth-context";
import { houses } from "../data/dummyData";
import Nav from "../components/Nav";
import BottomSheet from "../components/BottomSheet";

const MainScreen = () => {
  const [circlePosition, setCirclePosition] = useState(null);
  const authCtx = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [houseId, setHouseId] = useState();

  

  const handleMapPress = (e) => {
    setCirclePosition(e.nativeEvent.coordinate);

    houses.forEach((house) => {
      const distance = calculateDistance(e.nativeEvent.coordinate, house);
      if (distance < 0.002) {
        console.log(distance)
        sendNotificationToHouse(house.id);
        setHouseId(house.id)
        setShowModal(true);
      }
    });
  };

  const calculateDistance = (coordinate1, coordinate2) => {
    const latDiff = coordinate1.latitude - coordinate2.latitude;
    const lonDiff = coordinate1.longitude - coordinate2.longitude;
    return Math.sqrt(latDiff * latDiff + lonDiff * lonDiff);
  };

  const sendNotificationToHouse = (houseId) => {
    console.log(`Sending notification to house with ID: ${houseId}`);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  return (
    <SafeAreaView style={styles.container}>
      <Nav />
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
      <BottomSheet />
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Notification sent to House with ID: {houseId}</Text>
            <Button style={styles.button} title="Close Modal" onPress={closeModal} />
          </View>
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  button:{
    marginTop: 15
  }
});
