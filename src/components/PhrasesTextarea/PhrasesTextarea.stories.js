import * as React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import PhrasesTextarea from "./PhrasesTextarea";

storiesOf('Phrases Textarea', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('editable input', () => <Edit />)
  .add('not editable phrase', () => (
    <PhrasesTextarea phrase={"roa ambin'ny folo"} editable={false} />
  ))
  .add('not editable and longer', () => (
    <PhrasesTextarea
      phrase={
        'You an not edit this becacuse it will handle the last answer you have got'
      }
      editable={false}
    />
  ));

  // ----------Edit function---------------
  
  function Edit() {
  const [text, setText] = React.useState('');
  return (
    <PhrasesTextarea
      phrase={text}
      editable={true}
      onChange={input => setText(input)}
    />
  );
}