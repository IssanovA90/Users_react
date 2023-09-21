import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function EnterScreen() {
  const [value, onChange] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  function save() {}
  return (
    <View style={styles.conteiner}>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        value={value}
        placeholder="Почта"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Фамилия"
      />
      <TouchableOpacity style={styles.button} onPress={save}>
        <Text style={styles.text}>Войти</Text>
      </TouchableOpacity>
    </View>
  );
  
}
const styles = StyleSheet.create({
    conteiner: {
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
      fontWeight: 'bold',
    },
  });
