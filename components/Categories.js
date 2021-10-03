import React, { useState } from "react"
import { StyleSheet, Text, View, Image, FlatList } from "react-native"


const items = [
    {
        image: require("../assets/images/shopping-bag.png"),
        text: "Pick-up"
    },
    {

        image: require("../assets/images/soft-drink.png"),
        text: "Soft-Drinks"
    },
    {
        image: require("../assets/images/bread.png"),
        text: "Bakery Items"
    },
    {
        image: require("../assets/images/fast-food.png"),
        text: "Fast Foods"
    },
    {
        image: require("../assets/images/deals.png"),
        text: "Deals"
    },
    {
        image: require("../assets/images/coffee.png"),
        text: "Coffee & Tea"
    },
    {
        image: require("../assets/images/desserts.png"),
        text: "Desserts"
    },
]


const Categories = () => {
    const [categories, setCategories] = useState(items)
    return (
        <View style={{ marginTop: 5, backgroundColor: '#fff' }}>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={categories}
                keyExtractor={item => item.text}
                renderItem={({ item }) =>
                    <View style={{ marginRight: 15, alignItems: 'center' }}>
                        <Image
                            source={item.image}
                            style={{
                                width: 50,
                                height: 40,
                                resizeMode: 'contain'
                            }} />
                        <Text style={{
                            fontSize: 13,
                            fontWeight: '900'
                        }}>
                            {item.text}
                        </Text>
                    </View>

                } />
        </View>


    )
}

export default Categories

const styles = StyleSheet.create({})
