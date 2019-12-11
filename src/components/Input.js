import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Downshift from 'downshift';

const ImageWrapper = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Input = ({ items, placeholder }) => {
  const [inputState, changeInputState] = useState('');

  const handleChange = value => {
    const regex = /^[a-zA-Z\s]*$/;
    if (value.match(regex) || value === '') changeInputState(value);
  };

  return (
    <Downshift
      inputValue={inputState}
      onStateChange={({ inputValue: nextInputValue, type }) => {
        if (
          type === '__autocomplete_change_input__' ||
          type === '__autocomplete_click_item__'
        ) {
          handleChange(nextInputValue);
        }
      }}
      itemToString={item => (item ? item.name : '')}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        isOpen,
        inputValue,
        openMenu,
      }) => (
        <div>
          <input
            {...getInputProps({
              onFocus: openMenu,
            })}
            type="text"
            placeholder={placeholder}
          />
          <ul {...getMenuProps()}>
            {isOpen
              ? items
                  .filter(
                    item =>
                      !inputValue ||
                      item.name
                        .toLowerCase()
                        .includes(inputValue.toLowerCase()),
                  )
                  .map((item, index) => {
                    const { name, image } = item;
                    return (
                      <li
                        key={name}
                        {...getItemProps({
                          key: name,
                          index,
                          item,
                        })}
                      >
                        <ImageWrapper>
                          <img src={image} alt={name} />
                        </ImageWrapper>

                        {name}
                      </li>
                    );
                  })
              : null}
          </ul>
        </div>
      )}
    </Downshift>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
    }),
  ).isRequired,
};

Input.defaultProps = {
  placeholder: null,
};

export default Input;
