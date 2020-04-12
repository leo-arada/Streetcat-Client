import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'native-base';

const CommentList = ({ comment, userId, deleteComment }) => {
  return (
    <View style={styles.listBox}>
      <Text style={styles.name}>{comment.writerName}   </Text>
      <Text style={styles.content}>{comment.content}</Text>
      { comment.writerId === userId && (
         <Icon
          style={styles.deleteIcon} 
          name="md-close-circle"
          onPress={() => deleteComment(comment._id)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  listBox: {
    flexDirection: 'row',
    padding: 10,
  },
  name: {
    fontWeight: 'bold', 
    fontSize: 18,
  },
  content: {
    fontSize: 18, 
    textAlign: 'left',
  },
  deleteIcon: {
    marginLeft: 10,
  }
});

export default CommentList;
