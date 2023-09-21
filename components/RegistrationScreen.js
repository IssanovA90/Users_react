import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RegistrationScreen({ navigation }) {
  const [value, onChange] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  async function save() {
    if (value && password) {
    
      const usersString = await AsyncStorage.getItem("users");
      const users = usersString ? JSON.parse(usersString) : [];

     
      const candidate = users.find((user) => user.email === value);

      if (candidate) {
        console.error("Пользователь с таким email уже существует");
        return;
      }

     
      const user = {
        email: value,
        password: password,
      };

      
      const newUsers = [...users, user];

     
      await AsyncStorage.setItem("users", JSON.stringify(newUsers));
      console.log(newUsers);
      onChange("");
      onChangePassword("");
      navigation.navigate("Войти");
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        value={value}
        placeholder="E-mail"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Password"
      />
      <TouchableOpacity style={styles.button} onPress={save}>
        <Text style={styles.text}>Зарегистрироваться</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
