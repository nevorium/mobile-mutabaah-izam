import React from 'react';
import { Animated, Easing } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

export default function CircularProgress({ progress = 0.7, size = 120, strokeWidth = 12, color = '#38ef7d', bgColor = '#e0e0e0', duration = 800 }) {
  const animated = React.useRef(new Animated.Value(0)).current;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  React.useEffect(() => {
    Animated.timing(animated, {
      toValue: progress,
      duration,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [progress]);
  const strokeDashoffset = animated.interpolate({
    inputRange: [0, 1],
    outputRange: [circumference, 0],
  });
  return (
    <Svg width={size} height={size}>
      <Circle
        stroke={bgColor}
        fill="none"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
      />
      <AnimatedCircle
        stroke={color}
        fill="none"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={`${circumference}, ${circumference}`}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
      />
    </Svg>
  );
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
