import React from 'react';
import {Text,View,TextInput} from 'react-native';

export default class fb extends React.Component{
    constructor() {
        super();
        this.state = {
          text: '',
          author:'',
          storyText:'',
        };
      }
 
      submitStory = () => {
        db.add({
          title: this.state.title,
          author: this.state.author,
          storyText: this.state.storyText,
        });
        this.setState({
          title: '',
          author: '',
          storyText: '',
        })};

    render(){
        return(
          <View>
          <TouchableOpacity style={styles.header}>
            <Text style={styles.headerText}>Story Hub</Text>
          </TouchableOpacity>
  
          <TextInput placeholder="Story Title" />
  
          <TextInput placeholder="Author" />
  
          <TextInput
            placeholder="WRITE YOUR STORY"
            onChangeText={(text) => {
              this.setState({
                storyText: text,
              });
            }}
            value={this.state.storyText}
            
            multiline={true}
          />
  
          <TouchableOpacity
            onPress={this.submitStory}>
            <Text>Submit</Text>
          </TouchableOpacity>
          </View>
        )
    }