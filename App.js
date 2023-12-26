import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MyTabs from "./src/navigation/TabNavigation";
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 1,
    title: 'Free Delivery Offers',
    text: 'Description.\nSay something cool',
    image: require('./src/assets/image-3.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Order Status',
    text: 'Other cool stuff',
    image: require('./src/assets/image-17.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Delivered',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('./src/assets/image-18.png'),
    backgroundColor: '#22bcb5',
  }
]

function Apps() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}


const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: item.backgroundColor }}>
        <Text style={styles.text}>{item.title}</Text>
        <Image style={{ objectFit: 'contain', width: 300, height: 300 }} source={item.image} />
        <Text style={[styles.text, { fontSize: 20 }]}>{item.text}</Text>
      </View>
    );
  };

  const onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    setShowRealApp(true);
    console.log("Done--->")
  };

  useEffect(() => {
    // If showRealApp is true, you may want to navigate to another screen or perform other actions.
    // For now, this will log a message to the console.
    if (showRealApp) {
      console.log('Navigate to the real app');
    }
  }, [showRealApp]);

  if (showRealApp) {
    return <Apps />;
  } else {
    return <AppIntroSlider showNextButton renderItem={renderItem} onDone={onDone} data={slides} />;
  }
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  }
})


export default App;