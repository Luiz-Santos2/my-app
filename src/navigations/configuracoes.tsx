import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons'

import { Inicioscreen } from '../screens/inicio';
import { Categoriascreen } from '../screens/categoria';
import { Loginscreen } from '../screens/login';
import { Ofertasscreen } from '../screens/oferta';
import { Cadastroscreen } from '../screens/cadastro';
import { Configuracaoscreen } from '../screens/configuracao';


const Stack = createStackNavigator();
export const NavegacaoConfiguracaoScreen = () => {
   return (
      <NavigationContainer independent={true}>
         <Stack.Navigator>
            <Stack.Screen name="Configuração" component={Configuracaoscreen} />
            <Stack.Screen name="Login" component={Loginscreen} />
            <Stack.Screen name="Cadastro" component={Cadastroscreen} />
         </Stack.Navigator>
      </NavigationContainer>
   )
}

const Tab = createBottomTabNavigator();
export function NavegacaoPrincipal() {

   return (
      <NavigationContainer independent={true}>
         <Tab.Navigator>
            <Tab.Screen name="Início" component={Inicioscreen} options={{
               tabBarLabel: "Início",
               tabBarIcon: () => <MaterialIcons name="home" size={20} />
            }} />
            <Tab.Screen name="Favoritos" component={Ofertasscreen} options={{
               tabBarLabel: "Ofertas",
               tabBarIcon: () => <MaterialIcons name="bolt" size={20} />
            }} />
            <Tab.Screen name="Categorias" component={Categoriascreen} options={{
               tabBarLabel: "Categorias",
               tabBarIcon: () => <MaterialIcons name="menu" size={20} />
            }} />
            <Tab.Screen name="Configurações" component={NavegacaoConfiguracaoScreen} options={{
               tabBarLabel: "Configurações",
               tabBarIcon: () => <MaterialIcons name="settings" size={20} />
            }} />
         </Tab.Navigator>
      </NavigationContainer>
   )
}