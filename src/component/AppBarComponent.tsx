import React, { useState } from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import FloatButton from './FloatButtonComponent';

interface AppBarViewModel {
  title: string
}

const AppBarComponent = (viewModel: AppBarViewModel) => (
  <View>
    <Appbar.Header>
      <Appbar.Content title={viewModel.title} />
    </Appbar.Header>
    <FloatButton />
  </View>
);

export default AppBarComponent;
