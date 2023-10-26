import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'

import { Inicioscreen } from '../screens/inicio';
import { Ofertasscreen } from '../screens/oferta';
import { NavegacaoConfiguracaoScreen } from './configuracao';
import { NavegacaoCategoriaScreen } from './categoria';
import { NavegacaoOfertaScreen } from './oferta';
import { NavegacaoInicioScreen } from './inicio';

export type NavegacaoParamsPrincipal = {
   Início: any,
   Ofertas: any,
   Categorias: any,
   Configurações: any
}


const Tab = createBottomTabNavigator<NavegacaoParamsPrincipal>();
export function NavegacaoPrincipal() {

   return (
      <NavigationContainer >
         <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Início" component={NavegacaoInicioScreen} options={{
               tabBarLabel: "Início",
               tabBarIcon: () => <MaterialIcons name="home" size={20} />
            }} />
            <Tab.Screen name="Ofertas" component={NavegacaoOfertaScreen} options={{
               tabBarLabel: "Ofertas",
               tabBarIcon: () => <MaterialIcons name="bolt" size={20} />
            }} />
            <Tab.Screen name="Categorias" component={NavegacaoCategoriaScreen} options={{
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