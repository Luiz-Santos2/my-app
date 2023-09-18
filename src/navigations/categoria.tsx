import { createStackNavigator } from "@react-navigation/stack";
import { Categoriascreen } from '../screens/categoria';
import { Produtoscreen } from "../screens/produtos";

export type ProdutoParams = {
   Categoria: {category_id: any}, 
   Produtos: any
}

const Stack = createStackNavigator<ProdutoParams>();
export const NavegacaoCategoriaScreen = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen name="Categoria" component={Categoriascreen} />
         <Stack.Screen name="Produtos" component={Produtoscreen} />
      </Stack.Navigator>
   )
}