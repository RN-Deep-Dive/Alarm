import { View, Switch } from 'react-native'
import React, { useState } from 'react'
import StyledText from '../atoms/StyledText'
import { colors } from '../../constants/colors';
import { CheckBtn } from '../atoms/CheckBtn';

type mode = "read" | "delete";

interface AlarmCard {
    time: string // 알람이 울리는 시각 datetime picker? string으로 들어오는 게 맞나?
    day?: string // 반복하는 요일
    editMode: boolean
}
export const AlarmCard:React.FC<AlarmCard> = ({time, day, editMode}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [editing, setEditing] = useState(editMode);

    return (
        <View style={{
            margin: 5,
            marginHorizontal:10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent:'space-between',
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderBottomColor: colors.shadow}}>
            <View style={{padding: 20}}>
              <StyledText text={time} fontSize='xxxl' color='black' />
              <StyledText text={day} fontSize='md' color='black' />        
            </View>
            <View style={{padding: 20}}>
               {!editing? <CheckBtn />
               : <Switch
                trackColor={{false: '#767577', true: colors.palette.blue200}}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                />}
            </View>
        </View>
    )
}