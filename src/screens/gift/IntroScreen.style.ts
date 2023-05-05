// FriendSelectionScreen.style.ts
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: '#fff',
    //     alignItems: 'flex-start',
    //     paddingTop: 114,

    // },
    container: {
        flex: 1,
        // justifyContent: 'space-between',
        alignItems: 'center',
        width: width * 1.23,
        height: height * 1.23,
        position: 'relative',
        bottom: 90,
        right: 45,
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
    backButton: {
        width: 75,
        height: 35,
        backgroundColor: '#D9D9D9',
        borderRadius: 50,
    },
    nextButton: {
        width: 330,
        height: 56,
        backgroundColor: '#1E232C',
        borderRadius: 8,
        justifyContent: 'center',
        marginBottom: 50
    },
});
