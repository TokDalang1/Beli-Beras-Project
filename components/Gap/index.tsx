import React from 'react';
import {View} from 'react-native';

type GapProps = {
  height?: number;
  width?: number;
};

const Gap: React.FC<GapProps> = ({height = 0, width = 0}) => {
  return <View style={{height, width}} />;
};

export default Gap;
