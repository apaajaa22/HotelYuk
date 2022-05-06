import { Box, Button, FlatList, Image, Text } from 'native-base';
import * as React from 'react';
import { Alert, Linking, TouchableWithoutFeedback } from 'react-native';
import { Maps } from '../../assets';
import Rating from '../../components/Rating';

function Detail({ route }: { route: any }) {
  const { name, image_url, price, rating, photos, address, country, map_url } =
    route.params;

  const onPressMap = React.useCallback(async () => {
    const supported = await Linking.canOpenURL(map_url);
    if (supported) {
      await Linking.openURL(map_url);
    } else {
      Alert.alert("Don't know how to open this URL");
    }
  }, [map_url]);

  const renderItem = ({ item }: { item: string }) => {
    return (
      <Box>
        <Image
          source={{ uri: item }}
          width="110px"
          height={'88px'}
          borderRadius={'10px'}
          mr={'10px'}
          alt="photooss"
        />
      </Box>
    );
  };

  return (
    <Box flex="1" bg={'white'}>
      <Image
        source={{ uri: image_url }}
        w={'100%'}
        h={'100%'}
        flex={0.4}
        alt="bg"
      />
      <Box
        borderTopRadius={20}
        top={-20}
        bg={'white'}
        flex={0.6}
        paddingX={'24px'}
        paddingTop={'30px'}>
        <Box
          flexDir={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <Box>
            <Text fontSize={'22px'} fontWeight={'medium'}>
              {name}
            </Text>
            <Box flexDir={'row'} alignItems={'center'}>
              <Text bold fontSize={'18px'} color={'blue.700'}>
                ${price}
              </Text>
              <Text fontWeight={'light'} fontSize={16}>
                / Month
              </Text>
            </Box>
          </Box>
          <Rating number={rating} />
        </Box>
        <Box mt={'30px'}>
          <Text fontSize={'16px'} fontWeight="medium" mb={'10px'}>
            Photos
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={photos}
            renderItem={renderItem}
          />
        </Box>
        <Box mt={'30px'} flex={1}>
          <Text fontSize={'16px'} fontWeight="medium" mb={'10px'}>
            Location
          </Text>
          <Box
            flexDir={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}>
            <Text fontSize={14} fontWeight={'light'}>
              {address}, {country}
            </Text>
            <TouchableWithoutFeedback onPress={onPressMap}>
              <Image source={Maps} alt="maps" />
            </TouchableWithoutFeedback>
          </Box>
        </Box>
        <Button
          borderRadius={'15px'}
          onPress={() => Alert.alert(`Hotel ${name} berhasil di Booking`)}>
          <Text bold color={'white'} fontSize={18}>
            Book Now
          </Text>
        </Button>
      </Box>
    </Box>
  );
}

export default Detail;
