import React, {Component} from 'react';
import {AppState, Text, Button} from 'react-native';
import Fabric from 'react-native-fabric';
import IC1 from './Components/IC1';
import IC2 from './Components/IC2';

class App extends Component {
  state = {
    appState: AppState.currentState,
  };

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = nextAppState => {
    if (nextAppState === 'inactive' || nextAppState === 'background') {
      console.log('App has been closed!');
    }
  };

  uncoveredCode = () => {
    if (true) {
      return 1;
    } else {
      return 2;
    }
  };

  render() {
    return (
      <IC1>
        <Text>Hello from Vinay..!!</Text>
        <IC2>
          <Text>Hello World</Text>
        </IC2>
        <Button
          onPress={() => {
            var {Crashlytics} = Fabric;
            Crashlytics.crash();
          }}
          title="click me"
        />
      </IC1>
    );
  }
}

export default App;
