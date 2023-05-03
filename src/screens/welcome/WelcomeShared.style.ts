import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 150,
        backgroundColor: '#f5f5f5',
    },
    imgContainer: {
        width: 250,
        height: 320,
        alignItems: 'center',
    },
    textContainer: {
        height: 200,
        marginVertical: 10,
    },
    textHeader: {
        fontSize: 22,
        paddingVertical: 15,
        textAlign: 'center',
    },
    textDetail: {
        fontSize: 13,
        paddingVertical: 10,
        textAlign: 'center',
    },
    dotsContainer: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        padding: 20,
    },
    dotBlack: {
        backgroundColor: '#2e323b',
        width: 10,
        height: 10,
        borderRadius: 20,
        margin: 4,
    },
    dotGray: {
        backgroundColor: '#d9d9d9',
        width: 10,
        height: 10,
        borderRadius: 20,
        margin: 4,
    }
});