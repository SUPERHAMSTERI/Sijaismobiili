import React from 'react'

import TailoredSubsitutions from '../screens/TailoredSubsitutions'
import SubstitutionScreen from '../components/SubstitutionScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const TailoredStack = createNativeStackNavigator()
function TailoredSubstitutionsStackScreen()  {
  return(
    <TailoredStack.Navigator screenOptions={{ headerShown: false}}>
      <TailoredStack.Screen name="tailored" component={TailoredSubsitutions} />
      <TailoredStack.Screen name="Substitution" component={SubstitutionScreen}/>
    </TailoredStack.Navigator>
  )
}

export default TailoredSubstitutionsStackScreen