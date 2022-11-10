import React, { useState } from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import { ItemInterface } from '../types/item'

export const Item:React.FC<ItemInterface> = ({ item }) => {
  const [isChildrenShown, setIsChildrenShown] = useState(false)
  const { title, children } = item

  const onItemPress = () => setIsChildrenShown(prevState => !prevState)

  const showChildren = children?.length && isChildrenShown

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onItemPress} style={styles.containerInner}>
          <Text style={styles.title}>
            {title}
          </Text>
        </TouchableOpacity>
        {showChildren && children.map(item => <Item item={item} key={item.id} />)}
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 16
  },
  containerInner: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    marginVertical: 4,
    padding: 8,
    backgroundColor: '#bcbcbc',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
})