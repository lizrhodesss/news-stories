import React, { useState, useEffect }from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'



const NewsList = () => {
    const [articles, setArticles] = useState([])


    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://newsapi.org/v2/everything?q=tech&apiKey=7a03030ae74546d1852d0648b240dbea')
            console.log(response)
            setArticles(response.data.articles)
        }
        getArticles()
    },[])

  return (
    <div>
        {articles.map(article => {
            return (
                <NewsItem 
                    title={article.title}
                    description={article.description}
                    url={article.url}
                    urlToImage={article.urlToImage}
                />
            )
        })}
    </div>
  )
}
export default NewsList