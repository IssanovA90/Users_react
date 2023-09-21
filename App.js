import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import RegistrationScreen  from "./components/RegistrationScreen";
import EnterScreen from "./components/EnterScreen";

const Stack = createNativeStackNavigator();

function AuthScreen({navigation}) {
  function onPress() {}
  return (
    <View style={styles.conteiner}>
      <TouchableOpacity style={styles.button}  onPress={() =>
        navigation.navigate('Регистрация', {name: 'Регистрация'})
      }>
        <Text style={styles.text}>Регистрация</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() =>
        navigation.navigate('Войти', {name: 'Войти'})
      }>
        <Text style={styles.text}>Войти</Text>
      </TouchableOpacity>
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Авторизация"
          component={AuthScreen}
          options={{ title: "Авторизация" }}
        />
        <Stack.Screen
          name="Войти"
          component={EnterScreen}
          options={{ title: "Войти" }}
        />
        <Stack.Screen
          name="Регистрация"
          component={RegistrationScreen}
          options={{ title: "Регистрация" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    padding: 20,
    gap: 20,
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: "blue",
    borderRadius: 10,
    justifyContent: "center",
    padding: 10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
export default App;
