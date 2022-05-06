import { Box, FlatList, Text } from 'native-base';
import * as React from 'react';
import { useQuery } from 'react-query';
import { HotelItems, Loading } from '../../components';

interface dataHotelProps {
  item: {
    image_url: string;
    name: string;
    price: string;
    city: string;
    country: string;
    rating: number;
  };
}

function Home({ navigation }: { navigation: any }) {
  const { isLoading, data } = useQuery('HotelData', () =>
    fetch('https://bwa-cozy.herokuapp.com/recommended-spaces').then(res =>
      res.json(),
    ),
  );

  const onPress = React.useCallback(
    item => {
      navigation.navigate('Detail', item);
    },
    [navigation],
  );

  const renderItems = ({ item }: dataHotelProps) => {
    return (
      <HotelItems
        name={item.name}
        image={item.image_url}
        price={item.price}
        country={item.country}
        city={item.city}
        onPress={() => onPress(item)}
        rating={item.rating}
      />
    );
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Box padding={'24px'}>
      <Text fontSize={16} fontWeight={'medium'} pb={'16px'}>
        Recommended Space
      </Text>
      <FlatList
        data={data}
        renderItem={renderItems}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  );
}

export default Home;
