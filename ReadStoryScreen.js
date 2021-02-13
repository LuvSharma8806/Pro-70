import React from 'react';
import {StyleSheet,Text,View} from 'react-native';

export default class inst extends React.Component{
    render(){
        return(
            <View>
          <Text style={styles.headerText}>Story Hub</Text>
        <Text style={styles.displayText}>Tick tock...tick tock...
Life is counting down on your internal clock.
Memories that feel as if they occurred yesterday
turn to flashes of moments that seem to fade away.
People you once knew
walk by without a clue.
The times you once shared
exist as if you were never there.
Years fly...friends die...
and you never know when you'll say your last goodbye.
Oh, how I wish I could turn back time,
spend it with loved ones and cherish what once was mine.
Or to go back even more,
being a kid in a candy store.
How I miss the way I used to feel
on Christmas day when Santa was real.
But back to reality...back to today,
family is scarce and memories continue to fade away.
Tick tock...tick tock...
How I wish I could control this clock.
 
</Text>

      </View>
        );
    }
}

const styles = StyleSheet.create({
    headerText: {
      fontFamily: 'algerian',
      fontSize: 35,
      textAlign: 'center',
      padding: 5,
    }
  });