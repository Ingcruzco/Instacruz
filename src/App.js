import React from 'react';
import ReactDOM from 'react-dom';
import {ListOfCategories} from './components/ListOfCategories';
import {GlobalStyles} from './GlobalStyles'
import {Logo} from './components/Logo';
//import {PhotoCard} from './components/PhotoCard/index'
import {ListOfPhotoCard} from './components/ListOfPhotoCard';

export const App=()=>{
   return (
       <div>
        <GlobalStyles />
        <Logo />
        <ListOfCategories />
        <ListOfPhotoCard />
       </div>
   );
}
