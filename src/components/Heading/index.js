import React from 'react';
import {HeadingWrapper, Title, Text} from "../Styled";

const Heading = () => {
  return (
    <div>
      <HeadingWrapper>
        <Title>Here you can find a world wide weather forecast</Title>
        <Text>
          {' '}
          Your solution for worldwide weather forecasts! With our app, you can
          easily get accurate weather updates for any location around the globe.
          Our user-friendly interface and intuitive design make it easy to
          navigate and find the information you need.
        </Text>
      </HeadingWrapper>
    </div>
  );
};

export default Heading;
