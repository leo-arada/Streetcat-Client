import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import CommentList from './CommentList';

const Comment = ({ cat, userId, comments, postRequesAddComment, deleteComment }) => {
  const [comment, setComment] = useState('');

  const inputHandler= (value) => {
    setComment(value);
  };

  return (
    <View style={styles.screen}>
      {comments.map((comment, i) => {
        return (
          <CommentList 
            comment={comment} 
            userId={userId} 
            deleteComment={deleteComment} 
            cat={cat} 
            key={comment._id + i}
          />
        );
      })}
      <View style={styles.commentContainer}>
        <TextInput
          style={styles.inputText}
          maxLength={30}
          value={comment}
          onChangeText={(e) => inputHandler(e)}
          placeholder='코멘트를 입력해주세요' 
        />
        <TouchableOpacity
          onPress={() => postRequesAddComment(comment)}
        >
          <Text style={styles.postText}>POST</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  commentContainer: {
    borderTopWidth: 1, 
    borderTopColor: '#CACFD2', 
    width: '100%', 
    padding: 7, 
    flexDirection: 'row',
  },
  inputText: {
    width: '80%', 
    fontSize: 18,
  },
  postText: {
    fontSize: 18, 
    fontWeight: 'bold', 
  },
});

export default Comment;
