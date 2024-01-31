import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Nav = () => {
  return (
    <View style={styles.nav}>
      <TouchableOpacity style={styles.icon}>
        <FontAwesome name="user-circle" size={24} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onClick={() => authCtx.logout()} style={styles.profile}>
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
  );
}

export default Nav

const styles = StyleSheet.create({
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
    marginTop: 60,
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
});