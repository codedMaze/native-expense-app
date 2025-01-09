import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpenseItem from './ExpenseItem';

function renderExpenseItem({item}) {
    return <Text>{item.description}</Text>;
  }

const ExpensesList = ({expenses}) => {
  return (
    <View>
      <FlatList data={expenses} renderItem={ ({item}) => <ExpenseItem {...item} />} keyExtractor={({id}) => id }  />
    </View>
  )
}

export default ExpensesList

const styles = StyleSheet.create({})