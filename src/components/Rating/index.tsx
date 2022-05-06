import { Box, Image } from 'native-base';
import React from 'react';
import { StarActive, StarNonActive } from '../../assets';

const Rating = ({ number }: { number: number }) => {
  const renderStar = () => {
    let star = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= number) {
        star.push(
          <Image
            source={StarActive}
            w={5}
            h={5}
            key={i}
            alt="star"
            resizeMode="cover"
          />,
        );
      } else {
        star.push(
          <Image
            source={StarNonActive}
            w={5}
            h={5}
            key={i}
            alt="star off"
            resizeMode="cover"
          />,
        );
      }
    }
    return star;
  };
  return (
    <Box justifyContent={'center'} alignItems="center" flexDir={'row'}>
      {renderStar()}
    </Box>
  );
};

export default Rating;
