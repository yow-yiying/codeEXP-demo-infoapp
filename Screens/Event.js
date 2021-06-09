import * as React from "react";
import {Text, View, Button} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";


function EventsScreen({ navigation }) { //navigation is the only property we need
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , backgroundColor: "lightblue"}}>
        <Text>Events!</Text>
        <Button title="You've won $1Million!!! Click here!!" onPress = {() => navigation.navigate("EventsSecondScreen")}></Button>
      </View>
    );
  }

  function EventsSecondScreen() {
      return <Text>Don't get scammed.</Text>;
  }

const Stack = createStackNavigator();

export default function EventsStack() {
    return (
    <Stack.Navigator>
        <Stack.Screen name = "Events" component = {EventsScreen} />
        <Stack.Screen name = "EventsSecondScreen" component = {EventsSecondScreen} />
    </Stack.Navigator>
    );
}