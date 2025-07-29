import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {useEffect, useState} from 'react'
import api from '../../api/axiosConfig'
import { router, useLocalSearchParams } from 'expo-router';


export default function EditProduct() {

  const [name, setName] = useState("");
  const [barCode, setBarCode] = useState("");
  const [price, setPrice] = useState(0);
  const [tipoProdutoId, setTipoProdutoId] = useState(0);
  const {productId} = useLocalSearchParams();
  const [id, setId] = useState(0);


  useEffect(()=>{

    // no back end pegar os dados e setar no formulario

     api.get("/produtos/"+productId).then(
      (response) =>{
        console.log(response.data.produtct);
        setName(response.data.produtct.name);
        setBarCode(response.data.produtct.barCode);
        setPrice(response.data.produtct.price);
        setId(response.data.produtct.id);
      } 
     ).catch((error)=>{
      console.log(error);
     }) 
     console.log("entrou aqui");

  },[productId])

  const saveData = async ()=>{

    const body = {
      name: name,
      barCode: barCode,
      price: price,
      tipoProdutoId: '1'
    }
    console.log(body);

    api.put("/produtos/"+id,body).then( (response)=>{
    // console.log(response);
     router.replace(
       {
         pathname:"/logado/products",
         params:{ refreshDate:Date.now()}
       }

     )
    }).catch((error)=>{
      console.log(error);
    });

  } 

  return (
    <View style={styles.container}>
      <Text>Novo Produto</Text>
      <Text>Descrição</Text>
      <TextInput value={name} placeholder='Descrição' onChangeText={ (e)=>{setName(e)} } 
      style={{  marginTop: 20, height: 40, borderColor: 'gray', borderWidth: 1, width: '80%', marginBottom: 20, paddingHorizontal: 10 }}/>

      <Text>Codigo de Barras</Text>
      <TextInput value={barCode} placeholder='Codigo de Barras' onChangeText={ (e)=>{setBarCode(e)}} 
      style={{  marginTop: 20, height: 40, borderColor: 'gray', borderWidth: 1, width: '80%', marginBottom: 20, paddingHorizontal: 10 }}/> 

      <Text>Preço</Text>
      <TextInput placeholder='Preço' onChangeText={(text)=>{
        setPrice(text)
      }} value={price.toString()}
      style={{  marginTop: 20, height: 40, borderColor: 'gray', borderWidth: 1, width: '80%', marginBottom: 20, paddingHorizontal: 10 }}/>
      <Button title='Salvar' onPress={()=>{saveData()}}> </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
