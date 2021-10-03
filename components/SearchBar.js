import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { Ionicons, AntDesign } from 'react-native-vector-icons'

const SearchBar = () => {
    return (
        <View style={styles.searchContainer}>
            <GooglePlacesAutocomplete
                placeholder='Search'
                styles={{
                    textInput: {
                        backgroundColor: "#eee",
                        borderRadius: 20,
                        fontWeight: '700',
                        marginTop: 7
                    },
                    textInputContainer: {
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: 10,
                        borderRadius: 50,
                        backgroundColor: '#eee'
                    }
                }}
                renderLeftButton={() =>
                    <View style={{ marginLeft: 10 }}>
                        <Ionicons name="location-sharp" size={24} />
                    </View>
                }
                renderRightButton={() =>
                    <View
                        style={
                            {
                                marginRight: 8,
                                flexDirection: 'row',
                                backgroundColor: '#fff',
                                padding: 9,
                                alignItems: 'center',
                                borderRadius: 30
                            }
                        }>
                        <AntDesign name="clockcircle" size={11} />
                        <Text style={{ marginLeft: 10 }}>Search</Text>
                    </View>
                } />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    searchContainer: {
        marginTop: 15,
        flexDirection: 'row'
    },

})
