import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ImageBackground,
  Image,
  TouchableOpacity
} from 'react-native';
import bg from './../../assets/imgs/Logo.png';

export interface OfertascreensProps {
  navigation: any;
}

export function Ofertasscreen(props: OfertascreensProps) {

  type ItemData = {
    id: string;
    title: string;
    price: number;
    img_product: any;
    item_id: number;
  };

  const getItems = [
    {
      id: Math.random().toString(12).substring(0),
      title: `Harry Potter`,
      img_product: <Image style={styles.img_product} source={require('./../../assets/imgs/filme1.png')} />,
      price: 50.00,
      category_id: 0,
      item_id: 1
    },
    {
      id: Math.random().toString(12).substring(0),
      title: `The Walking Dead`,
      img_product: <Image style={styles.img_product} source={require('./../../assets/imgs/serie1.png')} />,
      price: 50.00,
      category_id: 1,
      item_id: 2
    },
    {
      id: Math.random().toString(12).substring(0),
      title: `Tom & Jerry`,
      img_product: <Image style={styles.img_product} source={require('./../../assets/imgs/desenho1.png')} />,
      price: 50.00,
      category_id: 2,
      item_id: 3
    },
    {
      id: Math.random().toString(12).substring(0),
      title: `Naruto`,
      img_product: <Image style={styles.img_product} source={require('./../../assets/imgs/anime1.png')} />,
      price: 50.00,
      category_id: 3,
      item_id: 4
    },
    {
      id: Math.random().toString(12).substring(0),
      title: `Soniko`,
      img_product: <Image style={styles.img_product} source={require('./../../assets/imgs/variado1.png')} />,
      price: 50.00,
      category_id: 4,
      item_id: 5
    },
  ];


  type ItemProps = {
    product: ItemData
  };

  const Item = ({ product }: ItemProps) => (
    <TouchableOpacity onPress={() => props.navigation.navigate('Descrição', { item_id: product.item_id  })}>
    <View style={styles.item}>
      {product.img_product}
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>R${product.price}</Text>
    </View>
    </TouchableOpacity>

  );
  return (
    <ImageBackground source={bg} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <FlatList
          initialNumToRender={4}
          renderItem={({ item }) => <Item product={item} />}
          keyExtractor={item => item.id}
          data={getItems}
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