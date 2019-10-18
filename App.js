import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const barStyle = {
  backgroundColor: 'red'
}

const renderScene = BottomNavigation.SceneMap({
  music: MusicRoute,
  albums: AlbumsRoute,
  recents: RecentsRoute,
});

export default class Bug extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'music', title: 'Music' },
      { key: 'albums', title: 'Albums' },
      { key: 'recents', title: 'Recents' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  render() {
    return (
      <BottomNavigation
        barStyle={barStyle}
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={renderScene}
      />
    );
  }
}