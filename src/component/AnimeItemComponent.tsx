import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import {
  Card, Avatar, Title, Paragraph,
} from 'react-native-paper';
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
  anime: AnimeInfo
}

const AnimeItemComponent: React.FC<Props> = (props) => (
  <Card>
    <Card.Cover source={{ uri: props.anime.imageURL }} />
    <Card.Content>
      <Title>{props.anime.title}</Title>
      <Paragraph>{props.anime.description}</Paragraph>
    </Card.Content>
  </Card>
);

export default AnimeItemComponent;
