import * as React from 'react';
import { Appbar, FAB } from 'react-native-paper';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View, Button,
} from 'react-native';
import AnimeInfo from '../../../model/AnimeInfo';
import AnimeItemComponent from '../../../component/AnimeItemComponent';

export interface Props {
  title: string;
  animeList: [AnimeInfo];
  onCLick: () => void;
}

const styles = StyleSheet.create({
  fabSafeArea: {
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    flex: 1,
  },
  fab: {
    margin: 16,
  },
  container: {
    width: '100%',
    height: '100%',
  },
  animeList: {
    backgroundColor: '#ffccaa',
  },
});

const HomePage: React.FC<Props> = (prop) => (
  <View style={styles.container}>
    <Appbar.Header>
      <Appbar.Content title={prop.title} />
    </Appbar.Header>
    <View style={styles.animeList}>
      <FlatList
        data={prop.animeList}
        renderItem={({ item }) => <AnimeItemComponent anime={item} />}
        keyExtractor={(item, index) => index.toString()}
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

export default HomePage;
