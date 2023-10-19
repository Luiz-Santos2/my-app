import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  FlatList,
  Image,
  Dimensions
} from 'react-native';
import Animated, {
  Layout,
  FadeInLeft,
  FadeOutRight,
} from 'react-native-reanimated';
import bg from './../../assets/imgs/Logo.png';

export interface IniciocreensProps {
}
const DATA = [
  {
    image: require('./../../assets/imgs/BannerPromoção.png'),
  },
  {
    image: require('./../../assets/imgs/BannerFrete.jpg'),
  },
  {
    image: require('./../../assets/imgs/BannerCriancas.png'),
  },
];
export function Inicioscreen(props: IniciocreensProps) {

  const [activeBanner, setActiveBanner] = useState<number>(0);
  const FlatlistRef = useRef<FlatList>(null);

  const onViewableItemsChanged = ( viewableItems : any) => {
    if (viewableItems[0] !== undefined) {
      setActiveBanner(viewableItems[0]?.index);
    }
  };

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {
        itemVisiblePercentThreshold: 100,
      },
      onViewableItemsChanged,
    },
  ]);

  useEffect(() => {
    if (activeBanner === DATA.length - 1) {
      return;
    }
    const timeId = setTimeout(() => {
      FlatlistRef.current?.scrollToIndex({
        index: activeBanner + 1,
        animated: true,
      });
      setActiveBanner((old) => old + 1);
    }, 3000);
    return () => clearTimeout(timeId);
  }, [activeBanner]);

  return (
    <ImageBackground source={bg} style={styles.container}>
      <View>
        <FlatList
          ref={FlatlistRef}
          data={DATA}
          renderItem={({ item, index }) => (
            <View style={styles.List}>
              <Image source={item.image}
                style={styles.imageList}
                resizeMode='contain' />
            </View>
          )}
          style={styles.indicator}
          contentContainerStyle={{
            marginLeft: -13,
          }}
          pagingEnabled
          viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
          horizontal
          keyExtractor={(item, index) => String(index)}
          showsHorizontalScrollIndicator={false}
        />
        <FlatList
          data={DATA}
          renderItem={({ item, index }) => (
            <Animated.View
              layout={Layout}
              entering={FadeInLeft}
              exiting={FadeOutRight}
              style={{
                width: activeBanner === index ? 12 : 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: activeBanner === index ? 'black' : 'gray',
                marginHorizontal: 4,
              }}
            />
          )}
          style={styles.flatList}
          scrollEnabled={false}
          horizontal
          keyExtractor={(item, index) => String(index)}
        />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
  },
  flatList: {
    paddingTop: 20,
    alignSelf: 'center',
    bottom: 150,
  },
  imageList: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    borderRadius: 30,
  },
  List: {
    width: Dimensions.get('screen').width * 0.8,
    alignItems: 'center',
    height: 200,
    borderRadius: 20,
    marginHorizontal: 40,
  },
  indicator: {
    paddingTop: 20,
    height: 1,
  }
});