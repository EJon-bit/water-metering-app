import React from 'react';

import { Scrollbars } from 'react-custom-scrollbars';

const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: 'rgba(35, 49, 86, 0.8)'
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

const CustomScrollbars = props => (
    <Scrollbars
      renderThumbHorizontal={()=><div style={{backgroundColor: 'transparent'}}/>}
      renderThumbVertical={renderThumb}
      {...props}
    />
);

export default CustomScrollbars;