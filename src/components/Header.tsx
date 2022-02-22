import React from 'react';
import { HeaderProps } from '../interfaces';

function Header({ result }: HeaderProps): JSX.Element {
  console.log(result);
  return (
    <>
      <div>test layout</div>
    </>
  );
}

export default Header;
