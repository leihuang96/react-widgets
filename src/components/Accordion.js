/* eslint-disable no-lone-blocks */
import React, { useState } from 'react';

const Accordion = ({ items }) => {
  /* step1: initialize value of state */
  const [activeIndex, setActiveIndex] = useState(null);
  /* step2: change value through setState function*/
  const onTitleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const renderedItems = items.map((item, index) => {
    {
      /*用一个variable，通过判断是否是activeindex来进行变化 */
    }

    return (
      <React.Fragment key={item.title}>
        {/* Pass event handlers and other functions as props to child components; HTML onclick Event Attribute */}
        <div
          className={`title`}
          onClick={() => {
            onTitleClick(index);
          }}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`${activeIndex === index ? 'active' : ''} content`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
