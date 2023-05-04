import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
   optionContainer: {
        // flex: 1,
        flexDirection: 'row',
        width: 365,
        height: 35,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        marginVertical: 10,
   },
   leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
   },
   icon: {
        width: 24,
        height: 24,
   },
   text: {
        fontSize: 16,
        paddingHorizontal: 20,
   }
});