import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import Navigation from './Navigation'

const index = () => {
    const router = useRouter()
  return (
        <Navigation />
  )
}

export default index

const styles = StyleSheet.create({})