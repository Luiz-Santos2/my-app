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

export interface ProdutoscreensProps {
  route: RouteProp<ProdutoParams, "Produtos">;
}

export function Produtoscreen(props: ProdutoscreensProps) {
  const category_id = props.route.params?.category_id.index
  console.log(category_id)

  type ItemData = {
    id: string;
    title: string;
    price: number;
    img_product: any;
  };

  const getItems = [
    {
      id: Math.random().toString(12).substring(0),
      title: `Harry Potter`,
      img_product: <Image style={styles.img_product} source={require('./../../assets/imgs/filme1.png')} />,
      price: 50.00,
      category_id: 0
    },
    {
      id: Math.random().toString(12).substring(0),
      title: `The Walking Dead`,
      img_product: <Image style={styles.img_product} source={require('./../../assets/imgs/serie1.png')} />,
      price: 50.00,
      category_id: 0
    },
    {
      id: Math.random().toString(12).substring(0),
      title: `Tom & Jerry`,
      img_product: <Image style={styles.img_product} source={require('./../../assets/imgs/desenho1.png')} />,
      price: 50.00,
      category_id: 0
    },
    {
      id: Math.random().toString(12).substring(0),
      title: `Naruto`,
      img_product: <Image style={styles.img_product} source={require('./../../assets/imgs/anime1.png')} />,
      price: 50.00,
      category_id: 0
    },
    {
      id: Math.random().toString(12).substring(0),
      title: `Soniko`,
      img_product: <Image style={styles.img_product} source={require('./../../assets/imgs/variado1.png')} />,
      price: 50.00,
      category_id: 0,

    },
  ];
  type ItemProps = {
    product: ItemData
  };

  const Item = ({ product }: ItemProps) => (
    <View style={styles.item}>
      {product.img_product}
      <Text style={styles.title}>{product.title}</Text>
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
          data={getItems.filter(item => item.category_id == category_id )}
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
    fontSize: 22,
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    textAlign: 'center',
  },
  item: {
    backgroundColor: 'rgba(211,211,211,0.97)',
    marginVertical: 5,
    marginHorizontal: 16,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10
  },
  img_product: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginVertical: 10
  }
});