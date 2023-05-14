import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 114,
    },
    title: {
        width: 'auto',
        height: 37,
        left: 24,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 46,
        color: '#000000',
    },
    text: {
        fontSize: 15,
        color: '#8A8A8A',
        fontWeight: 'bold',
    },
    input: {
        padding: 0,
        backgroundColor: 'transparent',
    },
    inputcontainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 333,
        height: 110,
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 30,
        padding: 14,
        marginVertical: 60,
    },
    giftsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    giftItem: {
        margin: 10,
        alignItems: "center",
    },
    giftImage: {
        width: 100,
        height: 100,
    },
    giftTitle: {
        marginTop: 5,
    },
});
