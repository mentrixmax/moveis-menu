import { router, Tabs } from "expo-router";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from 'expo-router/drawer';
import { TouchableOpacity } from "react-native";

export default function Layout() {
  return (

 <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
      
        <Drawer.Screen
          name="profile" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Profile',
            title: 'Profile',
            drawerIcon: ({ color }) => (
              <FontAwesome name="user" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="products" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Produtos',
            title: 'Produtos',
            drawerIcon: ({ color }) => (
              <FontAwesome name="amazon" size={24} color={color} />
            ),

            headerRight:()=>(
              <TouchableOpacity onPress={ ()=>{
                router.replace("/logado/newproduct")

              }}>
                <Ionicons name="add" size={24} color="black" />
              </TouchableOpacity>
            )
          }}
          
        />

        <Drawer.Screen
          name="newproduct" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Novo Produtos',
            title: 'Novo Produtos',
            drawerItemStyle:{ display:"none"},
            drawerIcon: ({ color }) => (
              <FontAwesome name="amazon" size={24} color={color} />
            ),
            headerRight:()=>(
              <TouchableOpacity onPress={()=>{
                router.replace("/logado/products")

              }}>
                <Ionicons name="arrow-back" size={30} color="black"/>
              </TouchableOpacity>
            ),

          }}
          
        />

          <Drawer.Screen
          name="editproduct" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Edit Produtos',
            title: 'Edit  Produtos',
            drawerItemStyle:{ display:"none"},
            drawerIcon: ({ color }) => (
              <FontAwesome name="amazon" size={24} color={color} />
            ),
            headerRight:()=>(
              <TouchableOpacity onPress={()=>{
                router.replace("/logado/products")

              }}>
                <Ionicons name="arrow-back" size={30} color="black"/>
              </TouchableOpacity>
            ),
          }}
          
        />

      </Drawer>
    </GestureHandlerRootView>
  );


}
