import React from 'react';
import {PhotoCard} from '../PhotoCard';
import {List,Item} from './styles'
export const ListOfPhotoCard=()=>{
    return(
        <List>
            {
                [1,2,3].map((index)=>
                <Item key={index}><PhotoCard /></Item>
                )
            }
        </List>
    );
}