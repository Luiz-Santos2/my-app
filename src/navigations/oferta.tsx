import { createStackNavigator } from "@react-navigation/stack";
import { Ofertasscreen } from "../screens/oferta";
import { Descricaoscreen } from "../screens/descricao";


export type OfertaParams = { 
   Ofetas: any,
   Descrição: {item_id: number}
}

const Stack = createStackNavigator<OfertaParams>();
export const NavegacaoOfertaScreen = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen name="Ofetas" component={Ofertasscreen}/>
         <Stack.Screen name="Descrição" component={Descricaoscreen}/>
      </Stack.Navigator>
   )
}