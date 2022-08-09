import { useEffect, useState, useCallback } from 'react';
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import * as Progress from 'react-native-progress';

const screenWidth = Dimensions.get('window').width - 16;

export const LChart = ({ data }) => {
  return (
    <LineChart
      data={{
        labels: ['일', '월', '화', '수', '목', '금', '토'],
        datasets: [
          {
            data: data,
          },
        ],
      }}
      width={screenWidth} // from react-native
      height={220}
      chartConfig={{
        backgroundGradientFrom: '#9dceff',
        backgroundGradientTo: '#92a3fd',
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 8,
      }}
    />
  );
};

export const PChart = ({ data }) => {
  const [progress, setProgress] = useState(0);
  const [indeterminate, setIndeterminate] = useState(true);

  const animate = useCallback(() => {
    let now = 0;
    setTimeout(() => {
      setIndeterminate(false);
      const interval = setInterval(function () {
        now += data / 5;
        if (now > data) {
          now = data;
          clearInterval(interval);
        }
        setProgress(now);
      }, 100);
    }, 1000);
  }, [data]);

  useEffect(() => {
    animate();
  }, [animate]);

  return (
    <Progress.Circle
      progress={progress}
      indeterminate={indeterminate}
      direction="counter-clockwise"
      borderColor="none"
      size={100}
      color="#92a3fd"
      thickness={6}
      unfilledColor="#dcddde"
      showsText={true}
    />
  );
};
