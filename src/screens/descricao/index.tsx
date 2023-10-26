import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ImageBackground,
  Image
} from 'react-native';
import bg from './../../assets/imgs/Logo.png';
import { ProdutoParams } from '../../navigations/categoria';
import { RouteProp } from '@react-navigation/native';

export interface DescricaoscreenProps {
  route: RouteProp<ProdutoParams, "Descrição">;
}

export function Descricaoscreen(props: DescricaoscreenProps) {
  //@ts-ignore
  const {item_id} = props.route.params
  console.log('item_id', item_id)

  type ItemData = {
    id: string;
    title: string;
    price: number;
    img_product: any;
    text: string;
  };

  const getItems = [
    {
      id: Math.random().toString(12).substring(0),
      title: `Harry Potter`,
      img_product: <Image style={styles.img_product} source={require('./../../assets/imgs/filme1.png')} />,
      price: 50.00,
      text: 'As figuras Pop Funko são conhecidas por sua estilização distintiva, que inclui cabeças grandes em proporção aos corpos e traços simplificados dos personagens. Uma figura Pop Funko do Harry Potter normalmente captura várias características do personagem icônico da série de livros e filmes. Aqui está uma descrição geral de como uma figura Pop Funko do Harry Potter pode ser: 1. **Aparência física**: Harry Potter é representado com seus óculos redondos, um cicatrizante em forma de raio na testa e cabelos bagunçados e pretos. Seu rosto terá traços simplificados, mas ainda manterá a essência do personagem. 2. **Uniforme',
      item_id: 1,
    },
    {
      id: Math.random().toString(12).substring(0),
      title: `The Walking Dead - Boneco Pop Funko Negan`,
      img_product: <Image style={styles.img_product} source={require('./../../assets/imgs/serie1.png')} />,
      price: 50.00,
      text: 'A figura "Pop Funko" do personagem Negan, da popular série de TV "The Walking Dead", é uma representação estilizada e colecionável deste personagem icônico. Os Bonecos Pop! da Funko são conhecidos por seu estilo característico, que inclui cabeças grandes e corpos pequenos, tornando-os adoráveis ​​e facilmente reconhecíveis. A figura de Negan provavelmente captura algumas das características distintivas do personagem da série de TV, como: 1. **Roupa icônica**: Ele provavelmente está vestido com sua jaqueta de couro preta e seu lenço vermelho, que são peças de roupa emblemáticas de Negan na série. 2. **Luc',
      item_id: 2,
    },
    {
      id: Math.random().toString(12).substring(0),
      title: `Tom & Jerry`,
      img_product: <Image style={styles.img_product} source={require('./../../assets/imgs/desenho1.png')} />,
      price: 50.00,
      text: 'Tom é o gato do desenho animado e é retratado em sua forma de gato antropomórfico. Ele tem uma cabeça grande e arredondada em proporção ao corpo, uma característica típica das figuras Pop Funko.Seus olhos são grandes e expressivos, muitas vezes mostrando alguma expressão de surpresa ou frustração, como é comum em desenhos animados.Ele pode estar em uma pose que reflete sua natureza atrapalhada, como perseguindo Jerry, em uma pose de raiva ou até mesmo em uma situação econômica.',
      item_id: 3,
    },
    {
      id: Math.random().toString(12).substring(0),
      title: `Naruto`,
      img_product: <Image style={styles.img_product} source={require('./../../assets/imgs/anime1.png')} />,
      price: 50.00,
      text: 'As figuras Pop Funko do Naruto são baseadas no personagem popular Naruto Uzumaki da série de mangá e anime "Naruto" e sua continuação "Naruto Shippuden". Aqui está uma descrição geral de como uma figura Pop Funko do Naruto costuma ser: 1. **Naruto Uzumaki**: - Naruto é o protagonista da série e é geralmente retratado usando o uniforme ninja específico, que inclui uma bandana com o emblema de Konoha (Folha) na testa, um casaco laranja e uma faixa preta na testa. - Ele tem cabelos loiros esperados e olhos azuis. - O rosto é estilizado, com uma cabeça grande em relação ao corpo, uma característica comum das figuras Pop Funko. - Naruto é frequentemente representado em uma pose característica, como fazendo o selo de mão "Ninja Way" ou realizando um jutsu, com as mãos e dedos em posições específicas. 2.',
      item_id: 4,
    },
    {
      id: Math.random().toString(12).substring(0),
      title: `Soniko`,
      img_product: <Image style={styles.img_product} source={require('./../../assets/imgs/variado1.png')} />,
      price: 50.00,
      text: 'Ó Funko Pop! Soniko é uma figura colecionável estilizada do personagem fictício Super Sonico. Super Sonico é um personagem popular no mundo dos animes, mangás e jogos, conhecido por sua aparência atraente, cabelo rosa e personalidade carismática. Aqui está uma descrição geral de como uma figura Pop Funko do Super Sonico pode ser: 1. **Super Sonico**: - Super Sonico é normalmente retratado com sua característica de aparência distinta, incluindo seu cabelo rosa comprido e olhos grandes e expressivos. - Ela é frequentemente representada usando trajes temáticos, como uniforme escolar, trajes de música ou roupas temáticas de super-heroína, dependendo da versão do Funko Pop. 2. **',
      item_id: 5,

    },
  ];
  type ItemProps = {
    product: ItemData
  };

  const Item = ({ product }: ItemProps) => (
    <View style={styles.item}>
      {product.img_product}
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.text}>{product.text}</Text>
      <Text style={styles.price}>R${product.price}</Text>
    </View>
  );
  return (
    <ImageBackground source={bg} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <FlatList
          initialNumToRender={4}
          renderItem={({ item }) => <Item product={item} />}
          keyExtractor={item => item.id}
          data={getItems.filter(item => item.item_id == item_id)}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 10

  },
  background: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    textAlign: 'center',
  },
  text:{
    fontSize: 18,
    textAlign: 'center',

  },
  item: {
    backgroundColor: 'rgba(211,211,211,0.97)',
    marginVertical: 2,
    marginHorizontal: 1,
    padding: 20,
    alignItems: 'center',
    borderRadius: 10
  },
  img_product: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginVertical: 10
  }
});