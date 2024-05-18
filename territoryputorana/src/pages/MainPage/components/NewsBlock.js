import React, { useState } from 'react'



const NewsBlock = () => {
    const [news, setNews] = useState()


    const getNews = () => {
        fetch('http://rcsskrsk.ru').then(res => res.text()).then((res) => 
                {
                    let parser = new DOMParser()
                    const doc = parser.parseFromString(res, "text/html")
                    let newsBlock= doc.querySelector('.news_content')
                    let strNews = newsBlock.innerHTML
                    let i = 0;
                    while(i = strNews.indexOf('ShowNews(', i)) {
                        console.log()
                    }
                    setNews(newsBlock)
                })
        }

  return (
    <div>
        <form>
            <button onClick={(e)=>{
                e.preventDefault()
                getNews()
                    }
                }>getNews</button>
                {news && (<textarea>{news.innerHTML}</textarea>
)}
        </form>
    </div>
  )
}

export default NewsBlock