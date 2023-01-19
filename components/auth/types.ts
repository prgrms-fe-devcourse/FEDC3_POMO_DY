import { ReactNode } from 'react';

export interface AuthRequiredProps {
  children: ReactNode;
}

export type TokenTypes = string | undefined;

export interface ErrorType {
  message?: string | undefined;
  options?: ErrorOptions | undefined;
}
