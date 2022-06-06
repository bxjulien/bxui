import React, { useEffect, useState } from 'react';
import './Button.scss';

interface IProps {
  label: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  icon?: any;
  color?: string
  backgroundColor?: string
  padding?: string
}

const Button = ({
  label,
  disabled = false,
  type = 'button',
  icon = null,
  color,
  backgroundColor,
  padding
}: IProps) => {

  const [style, setStyle] = useState();

  useEffect(() => {
    setStyle(getStyle(color, backgroundColor, padding));
  }, [])

  return (
    <button
      type={type}
      disabled={disabled}
      style={style}
    >
      {label}
      {icon && icon}
    </button>
  )
};

export default Button;

const getStyle = (color?: string, backgroundColor?: string, padding?: string) => {
  let style: any;

  style = {
    color,
    backgroundColor,
    padding
  }

  return style;
}