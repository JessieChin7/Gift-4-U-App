import React from "react";
import { View, ScrollView } from 'react-native';
import { Text } from "react-native-elements";
import CardProduct from "../../components/CardProduct";
import { styles } from "./ResultScreen.style";

import { allProducts } from "../../shared/data/fakeData";

interface ResultScreenProps { 
    navigation: any;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ navigation }) => {
    const categoryBPIds = [1, 2, 3]
    const categoryChocolateIds = [4, 5, 6]
    const categoryThingIds = [7, 8, 9]

    const categoryBP = allProducts.filter(product => categoryBPIds.includes(product.id))
    const categoryChocolate = allProducts.filter(product => categoryChocolateIds.includes(product.id))
    const categoryThings = allProducts.filter(product => categoryThingIds.includes(product.id))

    return (
        <ScrollView style={styles.container}>
            <View style={styles.productListContainer}>
                <Text style={styles.textHeading}>BlackPink</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
                {categoryBP.map(
                    (product: any) => 
                    <CardProduct 
                    key={product.id}
                    navigation={navigation} 
                    src={product.src} 
                    productName={product.name} 
                    productPrice={product.price} 
                    onPress={() => navigation.navigate('Product', { productId: product.id })}
                    />
                )}
                </ScrollView>
            </View>
            <View style={styles.productListContainer}>
                <Text style={styles.textHeading}>巧克力</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
                    {categoryChocolate.map(
                        (product: any) => 
                        <CardProduct 
                        key={product.id}
                        navigation={navigation} 
                        src={product.src} 
                        productName={product.name} 
                        productPrice={product.price} 
                        onPress={() => navigation.navigate('Product', { productId: product.id })}
                        />
                    )}
                </ScrollView>
            </View>
            <View style={styles.productListContainer}>
                <Text style={styles.textHeading}>文創小物</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
                    {categoryThings.map(
                        (product: any) => 
                        <CardProduct 
                        key={product.id}
                        navigation={navigation} 
                        src={product.src} 
                        productName={product.name} 
                        productPrice={product.price} 
                        onPress={() => navigation.navigate('Product', { productId: product.id })}
                        />
                    )}
                </ScrollView>
            </View>
        </ScrollView>
    );
};

export default ResultScreen;