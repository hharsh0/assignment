import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BottomSheet = () => {
  return (
    <View style={styles.bottomSheet}>
      <View style={styles.line} />
    </View>
  );
}

export default BottomSheet

const styles = StyleSheet.create({
  bottomSheet: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 80,
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