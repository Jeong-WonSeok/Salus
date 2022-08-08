import { Dimensions, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export const Chart = ({ data }) => {
  const screenWidth = Dimensions.get('window').width - 16;
  return (
    <View>
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
          backgroundColor: '#92a3fd',
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
    </View>
  );
};
