import { Link,router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import logo from '../../assets/logo.png'; // Adjust the path as necessary
import { useState } from 'react';

export default function App() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword]= useState('');

  const handleLogin = ()=>{

    if (username=="ADM" && password=="ADM") {  

      router.replace('/logado'); // Redirect to the logged-in area
      //alert(`Usuário: ${username}, Senha: ${password}`);
      } else {
      alert("Usuário ou senha inválidos");
      } 
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text>SYSPDV</Text>
      <TextInput
        style={{  marginTop: 20, height: 40, borderColor: 'gray', borderWidth: 1, width: '80%', marginBottom: 20, paddingHorizontal: 10 }}
        placeholder="Usuário"  onChangeText={ (text)=>{ setUsername(text) } } ></TextInput>

        <TextInput
        style={{  height: 40, borderColor: 'gray', borderWidth: 1, width: '80%', marginBottom: 20, paddingHorizontal: 10 }}
        placeholder="Senha" secureTextEntry onChangeText={ (text)=>{ setPassword(text) } } ></TextInput>

        <Button
        title="Entrar" onPress={handleLogin}></Button>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});
