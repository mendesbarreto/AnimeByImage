import React, { useState } from "react";
import { Appbar } from "react-native-paper";
import {StyleSheet} from "react-native";

interface AppBarViewModel {
    title: string
}

const AppBarComponent = (props: AppBarViewModel) => {
    return (
        <Appbar style={styles.bottom}>
            <Appbar.Action icon="mail"/>
        </Appbar>
    );
}

export default AppBarComponent

const styles = StyleSheet.create({
   bottom: {
       position: 'absolute',
       left: 0,
       right: 0,
       bottom: 0
   }
});
