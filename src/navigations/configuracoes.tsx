import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Inicioscreen } from '../screens/inicio';
import { Categoriascreen } from '../screens/categoria';
import { Loginscreen } from '../screens/login';
import { Ofertasscreen } from '../screens/oferta'; 
import {MaterialIcons} from '@expo/vector-icons'
import { Cadastroscreen } from '../screens/cadastro';

const Tab = createBottomTabNavigator();   

export function NavegacaoPrincipal() {

 return (
<NavigationContainer>
<Tab.Navigator>
 <Tab.Screen name="Início" component={Inicioscreen} options={{
    tabBarLabel:"Início",
    tabBarIcon: () => <MaterialIcons name = "home" size={20}/>
   }} />
 <Tab.Screen name="Favoritos" component={Ofertasscreen} options={{
    tabBarLabel:"Ofertas",
    tabBarIcon: () => <MaterialIcons name = "bolt" size={20}/>
    }} />
 <Tab.Screen name="Categorias" component={Categoriascreen} options={{
    tabBarLabel: "Categorias",
    tabBarIcon: () => <MaterialIcons name= "menu" size={20}/>
   }} />
 <Tab.Screen name="Configurações" component={Loginscreen} options={{
    tabBarLabel: "Configurações",
    tabBarIcon: () => <MaterialIcons name= "settings" size={20}/>
   }}/>
</Tab.Navigator>
</NavigationContainer>
)
}