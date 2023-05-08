import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingTop: 10,
        // paddingLeft: 22,
    },
    scrollContainer: {
        paddingLeft: 22,
    },
    textHeading: {
        paddingLeft: 22,
        fontSize: 18.4,
        fontWeight: 'bold',
        width: '100%',
        lineHeight: 45
    },
    categoryScrollContainer: {
        paddingLeft: 22,
        height: 200
    },
    categoryItem: {
        width: 370,
        height: 150,
        borderRadius: 17,
        backgroundColor: 'white',
        marginRight: 12,

        shadowColor: '#bab2af',
        shadowOffset: {
            width: 0,
            height: 15,
        },
        shadowOpacity: 0.5,
        shadowRadius: 15,
    },
    categoryImage: {
        width: 370,
        height: 150,
        borderRadius: 17,
        overflow: 'hidden',
    },
    productListContainer: {
        height: 410,
    },
});