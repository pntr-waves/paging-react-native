import React, {useCallback, useEffect} from 'react';
import {
  StatusBar,
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
//import hook
import {useDispatch, useSelector} from 'react-redux';
//import action
import {addUser} from '../redux/actions/actionCreator';

const Main = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [text, onChangeText] = React.useState('');
  const pressToAddUser = useCallback(() => {
    dispatch(addUser({name: text}));
  }, [dispatch]);
  return (
    <View style={{marginHorizontal: 10, marginVertical: 15}}>
      <Text
        style={{
          fontSize: 30,
          alignSelf: 'center',
          color: '#a8dadc',
          marginBottom: 20,
        }}>
        MANAGE USERS
      </Text>
      <StatusBar hidden />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextInput
          style={{
            borderColor: '#b7b7a4',
            borderWidth: 0.5,
            flexGrow: 1,
            borderRadius: 20,
            height: 40,
            textAlignVertical: 'center',
          }}
          placeholder={`add user name`}
          onChangeText={(text) => {
            onChangeText(textf);
          }}
          value={text}
        />
        <TouchableOpacity
          onPress={pressToAddUser}
          style={{
            flexBasis: 100,
            marginLeft: 10,
            backgroundColor: '#ddbea9',
            height: 40,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#f1faee'}}>add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={users.users}
        keyExtractor={(item) => item.name}
        renderItem={({item}) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};

export default Main;
