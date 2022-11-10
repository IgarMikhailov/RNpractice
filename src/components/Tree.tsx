import { ScrollView, StyleSheet } from "react-native"
import React, { useId } from 'react'
import { Item } from "./Item";
import { DATA } from "../utils/mockData"

export const Tree = () => {

  const { children } = DATA

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {children.map(item => <Item item={item} key={item.id}/>)}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
})