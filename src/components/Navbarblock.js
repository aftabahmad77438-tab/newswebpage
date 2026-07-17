import React, { useEffect, useState } from 'react'
import Navbaritem from './Navbaritem';

export default function Navbarblock({category}) {
    const [article,setarticle]=useState([]);

    useEffect(()=>{

        let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`;
        fetch(url).then((response)=>response.json())
        .then((data)=>setarticle(data.articles));

    },[category]);

  return (
    <div>
        { article && article.map((news,index)=>{
            return <Navbaritem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />

        })}

      
    </div>
  )
}
