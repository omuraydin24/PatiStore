import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        margin: 5,
        width: Dimensions.get('window').width / 2 - 10,
        backgroundColor: "#eceff1",
        borderRadius: 7,

    },
    image: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderWidth: 1 / 2,
        margin: 7,
        borderRadius: 7,
        height: Dimensions.get('window').height / 3.5,


    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        flexGrow: 1,
    },
    description: {
        paddingTop: 3,
        flexDirection: 'column',
        fontWeight: 'bold',
        color: 'gray',

    },
    author: {
        fontStyle: 'italic',
        textAlign: 'right',
    },
    innerContainer: {
        padding: 7,
        alignContent: 'flex-end',
        flex: 1,
    },
   });