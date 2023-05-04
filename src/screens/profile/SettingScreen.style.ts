import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'flex-start',
        paddingVertical: 30,
        paddingHorizontal: 30,
    },
    sectionContainer: {
        flexDirection: 'column',
        marginVertical: 10,
    },
   textHeader: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#5a5a5a',
        alignSelf: 'flex-start',
        marginBottom: 10,
   },
   optionContainer: {
        // flex: 1,
        flexDirection: 'row',
        width: 365,
        height: 35,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        marginVertical: 20,
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
   },
   textNoPadding: {
        fontSize: 16,
   },
   divider: {
     borderWidth: 0.5,
     borderColor:'#d9d9d9',
   },
});