import React from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';

interface BlurViewProps {
  blurType: 'xlight' | 'light' | 'dark' | 'extraDark' | 'regular' | 'prominent';
  blurAmount: number;
  reducedTransparencyFallbackColor?: string;
  style?: StyleProp<ViewStyle>;
  children: React.ReactElement;
}

const BlurView = ({
  blurType,
  blurAmount,
  reducedTransparencyFallbackColor,
  style,
  children,
}: BlurViewProps): JSX.Element => (
  <View
    // blurType={blurType}
    // blurAmount={blurAmount}
    // reducedTransparencyFallbackColor={reducedTransparencyFallbackColor}
    style={[style, { backdropFilter: `blur( 20.0px )` } as ViewStyle]}
  >
    {children}
  </View>
);

export default BlurView;
