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
    Friend_List: undefined;
    History: undefined;
    Setting: undefined;
  
    // Welcome Screens
    Welcome_Second: undefined;
    Welcome_Third: undefined;
    Welcome_Fourth: undefined;
};

const headerOptions = { 
    headerShown: true,
    headerTitle: (props: any) => <HeaderTitle {...props} />,
    headerRight: (props: any) => <AvatarButton { ...props} />,
    headerShadowVisible: false,
}

const backOptions = { 
    headerLeft: (props: any) => <BackButton {...props} />,
    title: '',
    headerShadowVisible: false,
    // headerTransparent: true
}

export { headerOptions, backOptions };