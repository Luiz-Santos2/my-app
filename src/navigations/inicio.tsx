import { createStackNavigator } from "@react-navigation/stack";
import { Inicioscreen } from "../screens/inicio";

const Stack = createStackNavigator();
export const NavegacaoInicioScreen = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen name="Inicio" component={Inicioscreen} />
      </Stack.Navigator>
   )
}