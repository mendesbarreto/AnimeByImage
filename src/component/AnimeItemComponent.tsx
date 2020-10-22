import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AnimeInfo from '../model/AnimeInfo';

// import { FAB } from 'react-native-paper';
//
const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
});

export interface Props {
  item: AnimeInfo
}

const AnimeItemComponent = (props: Props) => (
  <Image style={styles.logo} source={{ uri: props.item.imageURL }} />
);

export default AnimeItemComponent;
