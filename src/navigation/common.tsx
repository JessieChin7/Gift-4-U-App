import { TouchableOpacity } from "react-native";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { HeaderTitle, AvatarButton, BackButton } from "../components/Header";

export type NavigatorParamList = {
    Login_Home: undefined;
    Login: undefined;

    Tab_Navigator: undefined;
    Home: undefined;
    Product: undefined;
    Gift: undefined;

    Register: undefined;
    Verification: undefined;
    Success: undefined;

    Profile: undefined;
    About: undefined;
    Friends_List: undefined;
    Friend_Detail: undefined;
    History: undefined;
    Setting: undefined;

    // Welcome Screens
    Welcome_Second: undefined;
    Welcome_Third: undefined;
    Welcome_Fourth: undefined;

    GameScreen: undefined;
    
    //Search Screens
    Search: undefined;
    Result: undefined;
};

const headerOptions = {
    headerShown: true,
    headerTitle: (props: any) => <HeaderTitle {...props} />,
    headerRight: (props: any) => <AvatarButton {...props} />,
    headerShadowVisible: false,
}

const backOptions = {
    headerLeft: (props: any) => <BackButton {...props} />,
    title: '',
    headerShadowVisible: false,
    // headerTransparent: true
}

const giftNavOptions = {
    headerRight: () => {
        const navigation = useNavigation<NavigationProp<NavigatorParamList>>();
        return (
        <TouchableOpacity onPress={() => navigation.navigate('GameScreen')}>
            <Icon
                name={'gift'}
                type={IconType.Ionicons}
                size={25}
                color={'black'}
            />
      </TouchableOpacity>)
    }
}

export { headerOptions, backOptions, giftNavOptions };