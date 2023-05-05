// FriendSelectionScreen.style.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    title: {
        position: 'absolute',
        width: 77,
        height: 37,
        left: 56,
        top: 138,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 46,
        color: '#000000',
    },
    friendContainer: {
        position: 'absolute',
        width: 225,
        height: 58,
        left: 45,
        top: 195,
        backgroundColor: '#D9D9D9',
        borderRadius: 50,
        borderWidth: 0,
        borderColor: 'transparent',

    },
    dropdown: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        width: 'auto',
        height: 'auto',
        backgroundColor: 'transparent',
        borderWidth: 0,
        marginTop: 14,

    },
    dropdownItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
        margin: 2,
        width: 147,
        height: 57,
        backgroundColor: '#DADADA',
        borderRadius: 30,
        borderWidth: 0,
        borderColor: 'transparent',

    },
    dropdownItemTitle: {
        height: 17,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 17,
        textAlign: 'center',
        backgroundColor: 'transparent',
        borderWidth: 0,
        borderColor: 'transparent',
    },
    friendImage: {
        width: 37,
        height: 37,
        marginRight: 10,
        marginLeft: 10,
        norepeat: 'no-repeat',
        border: 'none',
        borderColor: 'transparent',
    },
    radioGroup: {
        position: 'absolute',
        width: 186,
        height: 67,
        left: 70,
        top: 277,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 20,

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
    nextButton: {
        position: 'absolute',
        width: 75,
        height: 35,
        left: 284,
        top: 391,
        backgroundColor: '#D9D9D9',
        borderRadius: 50,

    },
    placeholderStyles: {
        color: "grey",

    },

});