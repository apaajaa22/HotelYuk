import { TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { Box, Image, Text } from 'native-base';

interface dataHotelProps {
  image: string;
  name: string;
  price: string;
  city: string;
  country: string;
  onPress?: () => void;
  rating: number;
}
const HotelItems = ({
  image,
  name,
  price,
  city,
  country,
  onPress,
  rating,
}: dataHotelProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Box flexDir={'row'}>
        <Box position={'relative'}>
          <Box
            position={'absolute'}
            zIndex={1}
            width={'50%'}
            bg="blue.600"
            height={'20%'}
            right={0}
            borderBottomLeftRadius={'40px'}
            borderTopRightRadius={'20px'}
            justifyContent={'center'}
            alignItems={'center'}>
            <Text color={'white'}>{rating}/5</Text>
          </Box>
          <Image
            zIndex={0}
            resizeMode="cover"
            height={'110px'}
            width={'130px'}
            borderRadius={20}
            mb={'20px'}
            source={{ uri: image }}
            alt={'hotel'}
          />
        </Box>
        <Box ml={'20px'}>
          <Text bold fontSize={'18px'}>
            {name}
          </Text>
          <Box flexDir={'row'} alignItems={'center'} mb={'16px'}>
            <Text bold fontSize={'18px'} color={'blue.700'}>
              ${price}
            </Text>
            <Text fontWeight={'light'} fontSize={16}>
              {' '}
              / month
            </Text>
          </Box>
          <Text fontWeight={'light'} fontSize={14}>
            {city}, {country}
          </Text>
        </Box>
      </Box>
    </TouchableWithoutFeedback>
  );
};

export default HotelItems;
