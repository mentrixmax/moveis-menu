import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import api from '../../api/axiosConfig'
import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { router, useLocalSearchParams } from 'expo-router';
import { getData } from '../../api/StorageService';

export default function Products() {
 const {refreshDate} = useLocalSearchParams(); 
 const [produtcts, setProducts] = useState([
  
 ]);

 const [refresh, setRefresh] = useState(false)

 useEffect(()=>{
  const getData = async ()=>{

    const dados = api.get("/produtos").then(
      (resp)=>{
        setProducts(resp.data.produtos)
        console.log(resp.data.produtos)
        setRefresh(false)
      }
    ).catch ((error)=>{
      console.log(error);
    } ) 
  }

  getData();

 },[refresh, refreshDate])

 const click = async (intemId) =>{
  router.replace(
    {
      pathname:"/logado/editproduct",
      params:{ productId:intemId}

    }

  );
  console.log(intemId);
 }
 const deleteFunct = async (itemId)=>{
  try {
  const resultado = await api.delete(`/produtos/delete/${itemId}`);
  console.log(resultado);
  setRefresh(true);
  //getData();
  }catch(error){
    console.log(error);
  }

 }

 const clickLong = async (intemId) =>{

  console.log("longo");
  console.log(intemId);
  Alert.alert("IFCE", "Deseja Excluir",[
  {text:"Cancelar",
   style:"cancel" 
  },
  {

    text:"Confirmar",
    style:"destructive",
    onPress:()=>{deleteFunct(intemId)}

  }

  ],{cancelable:true})
}

  return (
    <View style={styles.container}>
      <Text>Products</Text>
      <Button  title='listar' onPress={ ()=>{
        setRefresh(true)
      }}></Button>

     
      <StatusBar style="auto" />
      <ScrollView  style={styles.scroll}>
        {produtcts.map((produto, index) =>(
          <TouchableOpacity key={produto.id} style={styles.itens}
          onPress={()=>{
            click(produto.id)
          }}
          onLongPress={()=>{
            clickLong(produto.id)
          }}
          >
            <Text> Codigo:  {produto.barCode}</Text>
             <Text>Descrição: {produto.name}</Text>
             <Text>Preço: {produto.price}</Text>
        </TouchableOpacity> ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itens:{
    padding:10,
    borderBottomColor:'#111',
    borderBottomWidth:2
  },
  scroll:{
    flexGrow:1,
    padding:0

  }

});
