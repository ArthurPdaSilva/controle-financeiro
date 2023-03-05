import React from 'react';

export default interface InputProps {
  label: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}
