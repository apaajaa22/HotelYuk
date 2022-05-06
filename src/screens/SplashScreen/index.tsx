import { Box, Button, Image, Text } from 'native-base';
import * as React from 'react';
import { SplashScreenPic } from '../../assets';

interface SplashScreenProps {
  navigation: any;
}
function SplashScreen({ navigation }: SplashScreenProps) {
  const onPress = () => {
    navigation.navigate('Home');
  };

  return (
    <Box flex={1}>
      <Box padding={30}>
        <Text fontSize={24} fontWeight={'semibold'}>
          Find Cozy House
        </Text>
        <Text fontSize={24} fontWeight={'semibold'}>
          to Stay and Happy
        </Text>
        <Text fontSize={16} fontWeight={'light'} pt={'10px'}>
          Stop membuang banyak waktu
        </Text>
        <Text fontSize={16} fontWeight={'light'} pb={'40px'}>
          pada tempat yang tidak habitable
        </Text>
        <Button onPress={onPress} bg={'blue.900'} w={'60%'}>
          <Text color={'white'} fontSize={18}>
            Explore Now
          </Text>
        </Button>
      </Box>
      <Box flex={1} />
      <Image
        source={SplashScreenPic}
        resizeMode={'cover'}
        alt="background"
        width={'100%'}
        height={'433px'}
      />
    </Box>
  );
}

export default SplashScreen;
