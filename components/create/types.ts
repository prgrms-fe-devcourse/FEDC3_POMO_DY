import { FormEventHandler } from 'react';

export interface InputProps {
  type?: string;
  id: string;
  placeholder: string;
  width?: number;
  height?: number;
}

export interface onSuccessProp {
  onCreate: FormEventHandler<HTMLFormElement>;
}
