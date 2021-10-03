import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Categories from '../components/Categories'
import HeaderTbs from '../components/HeaderTbs'
import SearchBar from '../components/SearchBar'

const Home = () => {
    return (
        <SafeAreaView
            style={{
                backgroundColor: '#eee',
                flex: 1
            }}>
            <StatusBar style='auto' />

            < View style={{ backgroundColor: '#fff', padding: 15 }} >
                <HeaderTbs />
                <SearchBar />
            </View >
            <Categories />




        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})
