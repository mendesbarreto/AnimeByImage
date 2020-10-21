import React, { useState } from 'react';
import { Appbar, FAB } from 'react-native-paper';
import {
  FlatList,
  SafeAreaView, StyleSheet, View,
} from 'react-native';

import { redA100 } from 'react-native-paper/lib/typescript/src/styles/colors';
import AnimeItemComponent from '../../../component/AnimeItemComponent';
import AnimeInfo from '../../../model/AnimeInfo';

interface HomeScreenViewModel {
  title: string;
  animeList: [AnimeInfo];
}

const styles = StyleSheet.create({
  fabSafeArea: {
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    flex: 1,
  },
  fab: {
    marginRight: 24,
    marginBottom: 24,
  },
  container: {
    flex: 1,
  },
  animeList: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#ffccaa',
  },
});

const HomeScreen = (viewModel: HomeScreenViewModel) => (
  <View style={styles.container}>
    <Appbar.Header>
      <Appbar.Content title={viewModel.title} />
    </Appbar.Header>
    <View style={styles.animeList}>
      <FlatList<AnimeInfo>
        data={viewModel.animeList}
        renderItem={({ item }) => <AnimeItemComponent animeInfo={item} />}
        keyExtractor={((item, index) => index)}
      />
    </View>
    <SafeAreaView style={styles.fabSafeArea}>
      <FAB
        style={styles.fab}
        icon="plus"
        animated
      />
    </SafeAreaView>

  </View>
);

export default HomeScreen;
