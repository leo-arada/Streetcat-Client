import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { CheckBox } from "native-base";
import Input from '../components/Input';
import  { regPatterns, checkboxValues } from '../constants'

const CatScreen = ({ sendDataToServer, photo, displyPhoto, location }) => {
  const [name, setName] = useState('');
  const [accessibility, setAccessibility] = useState({ answer: '' });
  const [friendliness, setFriendliness] = useState({ answer: ''});
  const [description, setDescription] = useState('');
  
  const handleNameInput = (name) => {
    setName(name.replace(regPatterns.name, ''));
  };

  const handleDesccriptionInput = (description) => {
    setDescription(description.replace(regPatterns.name, ''));
  };
  
  const submitHandler = async () => {
    if (!photo.uri) return alert('고양이 사진을 등록해주세요');
    const data = {
      name,
      accessibility: accessibility.answer,
      friendliness: friendliness.answer,
      description,
      location: [location.latitude, location.longitude],
    }
   
    sendDataToServer(data, photo);
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <>
        <View style={styles.screen}>
          <View style={styles.inputContainer}>
            <Text style={styles.header}>냥이 이름</Text>
            <Input 
              style={styles.nameInput} 
              maxLength={10}
              onChangeText={handleNameInput}
              value={name}
            />
            <Text style={styles.header}>접근난이도</Text>
            <View style={styles.checkBoxContainer}>
              {checkboxValues.map((value, i) => {
                return (
                  <>
                    <CheckBox
                      key={i}
                      color="#fc5185"
                      onPress={() => setAccessibility({ answer: value })}
                      checked={accessibility.answer===value}
                    />
                    <Text style={styles.checkBoxText}>{value}</Text>
                  </>    
                );
              })}
            </View >
            <Text style={styles.header}>친화력</Text>
            <View style={styles.checkBoxContainer}>
              {checkboxValues.map((value, i) => {
                return (
                  <>
                    <CheckBox
                      key={i} 
                      color="#fc5185"
                      onPress={() => setFriendliness({ answer: value })}
                      checked={friendliness.answer===value}
                    />
                    <Text style={styles.checkBoxText}>{value}</Text>
                  </>    
                );
              })}
            </View >
            <Text style={styles.header}>특이사항</Text>
            <Input 
              style={styles.descriptionInput} 
              maxLength={20}
              onChangeText={handleDesccriptionInput}
              value={description}
            />
            <View style={styles.buttonContainer}>
              <Button 
                title="사진업로드"
                onPress={displyPhoto}
              />
            </View>
            {photo.uri && 
              <Image 
                source={{ uri: photo.uri }}
                style={{ width: 150, height: 150 }}
              />
            }
          </View>
        </View>
        <Button
          title="냥이등록"
          style={styles.submit} 
          onPress={submitHandler}
        />
      </> 
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: 350,
    maxWidth: '95%',
    alignItems: 'center',
    elevation: 10,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
  },
  nameInput: {
    width: 150,
    fontSize: 15,
  },
  descriptionInput: {
    width: 300,
    fontSize: 15,
  },
  header: {
    fontSize:20,
    fontWeight:"bold",
    color:"#364f6b",
    marginBottom:10
  },
  checkBoxContainer: {
    width:"80%",
    backgroundColor:"#fff",
    borderRadius:20,
    padding:10,
    marginBottom:10,
    flexDirection:"row",
  },
  checkBoxText: {
    marginLeft: 38,
  },
});

export default CatScreen;
