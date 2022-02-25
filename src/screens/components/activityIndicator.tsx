import * as React from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';

const activityIndicator = () => (
  <ActivityIndicator animating={true} color={Colors.red400} />
);

export default activityIndicator ;