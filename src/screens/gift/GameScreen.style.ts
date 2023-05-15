import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'stretch',
        flex: 1,
    },
    titleContainer: {
        flex: 1,
    },
    title: {
        width: 161,
        height: 37,
        left: 56,
        top: 138,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 46,
        color: '#000000',
    },
    scrollViewContainer: {
        flex: 3,
        paddingBottom: 20,
    },
    scrollView: {
        paddingHorizontal: 40,
    },
    checkBoxContainer: {
        backgroundColor: '#D9D9D9',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 50,
        width: 'auto',
        height: 68,
        borderWidth: 0,
        padding: 0,
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: 19,
    },
    detailBoxContainer: {
        backgroundColor: '#D9D9D9',
        width: 165,
        borderWidth: 0,
        borderRadius: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: 4,
        padding: 0,
    },
    detailItem: {
    },
    checkBoxTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000000',
    },
    detailBoxTitle: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#000000',
    },
    previewButton: {
        position: 'relative',
        width: 43,
        height: 23,
        backgroundColor: '#667080',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkButton: {
        width: 20,
        height: 18,
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
        borderRadius: 50,
        borderColor: 'transparent',
    },
    backButton: {
        width: 75,
        height: 35,
        backgroundColor: '#D9D9D9',
        borderRadius: 50,
    },
    nextButton: {
        width: 75,
        height: 35,
        backgroundColor: '#D9D9D9',
        borderRadius: 50,
    },
    input: {
        width: 57,
        height: 20,
        backgroundColor: '#D9D9D9',
        borderRadius: 5,
        padding: 2,
        textAlign: 'center',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",

    },
    modalImage: {
        width: "90%",
        height: "60%",
        resizeMode: "contain",
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: 20,
        height: 18,
        backgroundColor: '#D9D9D9',
        borderRadius: 50,
        borderColor: 'transparent',

    },

});