import * as React from "react";
import {Text, View} from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "pink" }}>
        <Text>Home!</Text>
        <FontAwesome name="glass" size={50} color="green" />
      </View>
    );
  }