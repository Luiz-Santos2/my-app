import { createStackNavigator } from "@react-navigation/stack";
import { Categoriascreen } from '../screens/categoria';
import { Produtoscreen } from "../screens/produtos";
import { Descricaoscreen } from "../screens/descricao";

export type ProdutoParams = {
   Categoria: any, 
   Produtos: {category_id: number, type_id: number},
   Descrição: {item_id: number}
}

const Stack = createStackNavigator<ProdutoParams>();
export const NavegacaoCategoriaScreen = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen name="Categoria" component={Categoriascreen}/>
         <Stack.Screen name="Produtos" component={Produtoscreen}/>
         <Stack.Screen name="Descrição" component={Descricaoscreen}/>
      </Stack.Navigator>
   )
}