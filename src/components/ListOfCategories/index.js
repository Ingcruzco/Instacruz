import React,{Fragment,useState,useEffect} from 'react';
import {Category} from '../Category';
import {List,Item} from './styles'
//import {categories as mockCategories} from '../../../api/db.json';

export const ListOfCategories=()=>{
    const [categories, setCategories]=useState([]); 
    const [showFixed, setShowFixed]=useState(false);
    useEffect(function(){
        window.fetch('http://localhost:8080/api/db.json')
            .then(res=>res.json())
            .then(response=> 
                setCategories(response.categories)
            )
    },[]) 
    useEffect(function(){
       const onScroll=e=>{
           const newShowFixed=window.scrollY>200
           showFixed!=newShowFixed && setShowFixed(newShowFixed)
       } 
       document.addEventListener('scroll',onScroll)
    })
    const  renderList=(fixed)=>(
        <List className={fixed?'fixed':''}>
            {
                categories.map(category=>{
                   return <Item key={category.id}><Category cover={category.cover} path={category.path} name={category.name} emoji={category.emoji}/></Item>
                })
            }
        </List>
    ) 
    return(
        <Fragment>
            {renderList()}
            {showFixed && renderList(true)}
        </Fragment>
    );    
}
