import * as React from 'react';
import { Appbar, FAB } from 'react-native-paper';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
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
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  fabContainer: {

  },
  animList: {
    width: '100%',
    height: '100%',
  },
  fab: {
    margin: 16,
  },
  container: {

  },
  animeList: {
    backgroundColor: '#ffccaa',
  },
});

function actionAddAnime() {
  console.log('Action add anime');
}

const HomeScreen: React.FC<Props> = (prop) => (
  <View>
    <SafeAreaView style={styles.animList}>
      <View style={styles.animeList}>
        <FlatList
          data={prop.animeList}
          renderItem={({ item }) => <AnimeItemComponent anime={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
    <SafeAreaView style={styles.fabSafeArea}>
      <View style={styles.fabContainer}>
        <FAB
          pointerEvents="box-only"
          style={styles.fab}
          icon="plus"
          animated
          onPress={actionAddAnime}
        />
      </View>
    </SafeAreaView>
  </View>
);
export default HomeScreen;
