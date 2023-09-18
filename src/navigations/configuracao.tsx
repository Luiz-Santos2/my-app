import { createStackNavigator } from "@react-navigation/stack";
import { Configuracaoscreen } from "../screens/configuracao";
import { Loginscreen } from "../screens/login";
import { Cadastroscreen } from "../screens/cadastro";

const Stack = createStackNavigator();
export const NavegacaoConfiguracaoScreen = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen name="Configuração" component={Configuracaoscreen} />
         <Stack.Screen name="Login" component={Loginscreen} />
         <Stack.Screen name="Cadastro" component={Cadastroscreen} options={{ headerShown: false }} />
      </Stack.Navigator>
   )
}