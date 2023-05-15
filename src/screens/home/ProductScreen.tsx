import React, { useState } from "react";
import { View, TouchableOpacity } from 'react-native';
import { Image, Text } from "react-native-elements";

import { useAppContext } from "../../context/AppContext";

import { styles } from "./ProductScreen.style";
import LabelItem from "./LabelItem";
import { allProducts, Product } from "../../shared/data/fakeData";

interface ProductScreenProps {
    route: any;
    navigation: any;
}

const ProductScreen: React.FC<ProductScreenProps> = ({ route, navigation }) => {
    const { productId } = route.params;
    const { 
        wishListProducts,
        setWishListProducts, 
        cartProducts,
        setCartProducts 
    } = useAppContext()

    const [addedToList, setAddedToList] = useState(false)
    const [addedToCart, setAddedToCart] = useState(false)
    const [focusingLabel, setFocusingLabel] = useState('')

    const chosenProduct = allProducts.find((product) => product.id == productId)

    const labelTexts = ["Extreme Soft", "Soft", "Medium", "Hard"]

    return (
        <View style={styles.container}>
            <Image source={chosenProduct?.src}  style={styles.image} />

            <View style={styles.productInfoContainer}>
                <View style={styles.headingContainer}>
                    <Text style={styles.textProductName}>{chosenProduct?.name}</Text>
                    <Text style={styles.textProductPrice}>${chosenProduct?.price}</Text>
                </View>
                <Text style={styles.textProductDescription}>{chosenProduct?.description}</Text>
                <View style={styles.divider}/>
                <Text style={styles.textProductOptions}>選擇 size</Text>
                <View style={styles.labelsContainer}>
                    {labelTexts.map((text) => 
                        <LabelItem 
                            isFocus={text === focusingLabel}
                            setFocusingLabel={setFocusingLabel}
                            text={text}
                        />
                    )}
                </View>

                <View style={styles.btnsContainer}>
                    {!addedToList ? 
                    <TouchableOpacity onPress={() => {
                        setAddedToList(true)
                        setWishListProducts([...wishListProducts, ...allProducts.filter((product: Product) => product.id === chosenProduct?.id)])
                    }} style={styles.button} activeOpacity={0.6}>
                        <Text style={styles.textButton}>加入願望清單</Text>
                    </TouchableOpacity>
                    : 
                    <TouchableOpacity onPress={() => {
                        setAddedToList(false)
                        setWishListProducts(wishListProducts.filter((product) => product.id !== chosenProduct?.id))
                    }} style={{ ...styles.button, backgroundColor: "#c5c8cb" }} activeOpacity={0.6}>
                        <Text style={styles.textButton}>已加入願望清單</Text>
                    </TouchableOpacity>
                    }

                    {!addedToCart ? 
                    <TouchableOpacity onPress={() => {
                        setAddedToCart(true)
                        setCartProducts([...cartProducts, ...allProducts.filter((product: Product) => product.id === chosenProduct?.id)])
                    }} style={styles.button} activeOpacity={0.6}>
                        <Text style={styles.textButton}>加入購物車</Text>
                    </TouchableOpacity>
                    : 
                    <TouchableOpacity onPress={() => {
                        setAddedToCart(false)
                        setCartProducts(cartProducts.filter((product) => product.id !== chosenProduct?.id))
                    }} style={{ ...styles.button, backgroundColor: "#c5c8cb" }} activeOpacity={0.6}>
                        <Text style={styles.textButton}>已加入購物車</Text>
                    </TouchableOpacity>
                    }
                </View>

                <TouchableOpacity onPress={() => {}} style={{ ...styles.button, backgroundColor: '#8391a1', width: '60%' }} activeOpacity={0.6}>
                    <Text style={styles.textButton}>直接購買</Text>
                </TouchableOpacity>

            </View>
        </View>

    );
};

export default ProductScreen;