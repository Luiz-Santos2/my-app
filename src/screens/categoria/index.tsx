import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  ImageBackground,
} from 'react-native';
import bg from './../../assets/imgs/Logo.png';

export interface CategoriacreenProps {
}

export function Categoriascreen (props: CategoriacreenProps) {

  const DATA = [
    {
      title: 'Filmes',
      data: ['Bonecos', 'Quadros', 'Ver Todos'],
    },
    {
      title: 'Séries',
      data: ['Bonecos', 'Quadros', 'Ver Todos'],
    },
    {
      title: 'Animes',
      data: ['Bonecos', 'Quadros', 'Ver Todos'],
    },
    
    {
      title: 'Desenhos',
      data: ['Bonecos', 'Quadros', 'Ver Todos'],
    },
  
    {
      title: 'Variados',
      data: ['Bonecos', 'Quadros', 'Ver Todos'],
    },
  
  ];


    return (
      <ImageBackground source={bg} style={styles.background}>
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
  </ImageBackground>
    )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 6,
    padding: 4
  },
  item: {
    backgroundColor: 'lightgrey',
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 25,
    borderRadius: 15
  },
  header: {
    fontSize: 32,
    padding: 5,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.6)',
    marginVertical: 5,
    marginHorizontal: 10,
    textAlign: 'center',
    borderRadius: 10
  },
  title: {
    fontSize: 24,
    textAlign: 'center'
  },
  background:{
    flex: 1,
}
}
)