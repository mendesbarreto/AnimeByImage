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

export interface AnimeItemViewModel {
  animeInfo: AnimeInfo
}

const AnimeItemComponent = (viewModel: AnimeItemViewModel) => (
  <Image style={styles.logo} source={{ uri: viewModel.imageURL }} />
);

export default AnimeItemComponent;
