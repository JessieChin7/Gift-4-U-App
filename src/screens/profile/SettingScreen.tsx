import React, { useState } from "react";
import { View, Switch } from "react-native";
import { Text } from "react-native-elements";

import SettingItem from "./SettingItem";

import { styles } from "./SettingScreen.style";

interface SettingScreenProps {}

const SettingScreen: React.FC<SettingScreenProps> = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
        <View style={styles.sectionContainer}>
          <Text style={styles.textHeader}>Profile</Text>
          <SettingItem 
            icon={require('../../assets/icon-fingerprint.png')}
            label="Privacy and security"
            onPress={() => {}}
          />
          <View style={styles.divider}/>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.textHeader}>General</Text>
          <View style={styles.optionContainer}>
              <Text style={styles.textNoPadding}>好友生日/紀念日提醒</Text>
              <Switch
                trackColor={{ false: "#767577", true: "#ffde99" }}
                thumbColor={ isEnabled ? "#ffbd33" : "#f4f3f4"}
                // ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{marginVertical: -8}}
              />
          </View>
          <SettingItem 
            icon={require('../../assets/icon-clock.png')}
            label="Search history"
            onPress={() => {}}
          />
          <SettingItem 
            icon={require('../../assets/icon-payment.png')}
            label="Payments"
            onPress={() => {}}
          />
          <SettingItem 
            icon={require('../../assets/icon-setting.png')}
            label="語言設定"
            onPress={() => {}}
          />
          <View style={styles.divider}/>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.textHeader}>About</Text>
          <SettingItem 
            icon={require('../../assets/icon-info.png')}
            label="Privacy policy"
            onPress={() => {}}
          />
          <SettingItem 
            icon={require('../../assets/icon-link.png')}
            label="Visit www.ui-kit.co"
            onPress={() => {}}
          />
        </View>


    </View>
  );
};

export default SettingScreen;