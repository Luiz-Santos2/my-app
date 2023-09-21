import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import bg from './../../assets/imgs/Logo.png';
import { StackNavigationProp } from '@react-navigation/stack';
import { ProdutoParams } from '../../navigations/categoria';
import { useNavigation } from '@react-navigation/native';



export interface CategoriascreenProps {

}

export function Categoriascreen(props: CategoriascreenProps) {

  type navProp = StackNavigationProp<ProdutoParams, "Categoria">;
  const navigation = useNavigation<navProp>();

  const CATEGORIA = [
    {
      title: 'Filmes',
      data: [{type: 'Bonecos', type_id: 1, category_id:1}, {type: 'Quadros', type_id: 2, category_id:1}],
    },
    {
      title: 'Séries',
      data: [{type: 'Bonecos', type_id: 1, category_id:2}, {type: 'Quadros', type_id: 2, category_id:2}],
    },
    {
      title: 'Animes',
      data: [{type: 'Bonecos', type_id: 1, category_id:3}, {type: 'Quadros', type_id: 2, category_id:3}],
    },
    {
      title: 'Desenhos',
      data: [{type: 'Bonecos', type_id: 1, category_id:4}, {type: 'Quadros', type_id: 2, category_id:4}],
    },
    {
      title: 'Variados',
      data: [{type: 'Bonecos', type_id: 1, category_id:5}, {type: 'Quadros', type_id: 2, category_id:5}],
    },
  ];


  return (
    <ImageBackground source={bg} style={styles.background}>
      <SafeAreaView style={styles.container}>

        <SectionList
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
          sections={CATEGORIA}
          keyExtractor={(item, index) => item.type + index}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Produtos', { category_id: item.category_id, type_id: item.type_id })}>
              <View style={styles.item}>
                <Text style={styles.title}>{item.type}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    </ImageBackground>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    backgroundColor: 'lightgrey',
    padding: 25,
    marginVertical: 10,
    marginHorizontal: 25,
    borderRadius: 20,
  },
  header: {
    fontSize: 32,
    padding: 10,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.6)',
    marginVertical: 10,
    marginHorizontal: 15,
    textAlign: 'center',
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  background: {
    flex: 1,
  }
}
)