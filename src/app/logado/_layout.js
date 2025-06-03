import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from 'expo-router/drawer';

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
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );


}
