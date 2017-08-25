'use strict'

import PropTypes from 'prop-types'

import { colors, typography } from './theme'

const Input = ({
  type = 'text',
  name,
  placeholder,
  inputRef,
  inputValue,
  align = 'left',
  handleInputChange
}) => {
  const onInputChange = value => {
    if (handleInputChange) {
      return handleInputChange(value)
    }
  }

  return (
    <div>
      <input
        className={align}
        type={type}
        name={name}
        placeholder={placeholder}
        ref={inputRef}
        value={inputValue}
        onChange={value => onInputChange(value)}
      />

      <style jsx>{`
        input {
          width: 100%;
          background-color: transparent;
          border: none;
          outline: none;
          border-bottom: 1px solid ${colors.border};
          padding: 8px 5px;
          font-size: ${typography.f14};
          color: ${colors.black};
        }

        .left {
          text-align: left;
        }

        .center {
          text-align: center;
        }

        .right {
          text-align: right;
        }

        input::-webkit-input-placeholder {
          color: ${colors.secondary};
        }

        input::-moz-placeholder {
          color: ${colors.secondary};
        }

        input:-ms-input-placeholder {
          color: ${colors.secondary};
        }

        input:-moz-placeholder {
          color: ${colors.secondary};
        }

        input:focus {
          outline: transparent;
          border-color: ${colors.black};
        }
      `}</style>
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  inputRef: PropTypes.func,
  inputValue: PropTypes.string,
  align: PropTypes.string,
  handleInputChange: PropTypes.func
}

export default Input
