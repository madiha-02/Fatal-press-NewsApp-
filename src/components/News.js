import React, {useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
const News=(props)=> {
   const [article,setArticle]=useState([])
   const [loading,setLoading]=useState(true)
   const [page,setPage]=useState(1)
   const [totalResults,setTotalResults]=useState(0)
  
    
    const updateNews = async()=>{
      props.setProgress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page - 1}&pageSize=${props.pageSize}`;
      setLoading(true);
      let data= await fetch(url);
      props.setProgress(30);
      let parsedData= await data.json();
      props.setProgress(70);
      setArticle(parsedData.articles)
      setTotalResults(parsedData.totalResults)
      setLoading(false)
        props.setProgress(100)
    }
    useEffect(()=>{
       document.title =`${props.category}-Fatal Press`;
       updateNews();
    },[])

    const fetchMoreData =async ()=> {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page+1)
        let data= await fetch(url);
        let parsedData= await data.json();
        setArticle(article.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    }
  
  
    return (
      <>
        <h1 className='text-center' style={{marginTop:'90px'}}>Fatal Press- Top {props.category} Headlines.</h1>
         {loading &&<Spinner/>}  
        <InfiniteScroll
          dataLength={article.length}
          next={fetchMoreData}
          hasMore={article.length !== totalResults}
          loader={loading &&<Spinner/>}
        >
        <div className='container'>
        <div className='row'>
        { article.map((element)=>{
            return <div className='col-md-4' key={element.url}>
            <NewsItem tittle={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
          </div>
        })}
         </div>  
        </div>
        </InfiniteScroll>
      
      </>
    )
  }


News.defaultProps={
  country:'in',
  pageSize:9,
  category:'general'
}
 News.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}

export default News
