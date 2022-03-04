import React from 'react';
import Link from 'next/link';

import { HeaderStyle,Logo } from '@styles/Header.styled';
import { FormatAlignJustify } from '@material-ui/icons';
export default function Header() {
  return (
    <HeaderStyle>
        <Logo>
            <Link href = "/">
                <a><FormatAlignJustify/></a>
            </Link>
        </Logo>
        <img src = "https://ms-f7-sites-03-cdn.azureedge.net/docs/stories/757564-maersk-transportation-azure-iot/resources/f1d08668-38bb-4827-9661-f45c00fc54a1/1165668197808589706_1165668197808589706" width="115" height="60"/>
        <nav>
            <ul>
                <li>
                    <Link href = "/events">
                        <a>Events</a>
                    </Link> 
                </li>
            </ul>
        </nav>
      
    </HeaderStyle>
  );
}
