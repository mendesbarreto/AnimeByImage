import React from 'react';
import AnimeInfo from './model/AnimeInfo';
import HomeScreen from './feature/home/component/HomeScreen';

export default function App() {
  return (
    <HomeScreen
      title="Home"
      animeList={
      [new AnimeInfo('Hi there', 'https://www.freecodecamp.org/news/content/images/size/w2000/2019/07/cover-photo.png', '??')]
    }
    />
  );
}
