import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../store/expenses-context';

const AllExpenses = () => {
  const {expenses} = useContext(ExpensesContext);
  return (
    <ExpensesOutput periodName={'Total'} expenses={expenses}/>
  )
}

export default AllExpenses

const styles = StyleSheet.create({})