const NewsItem = (props) => {
   
    let {tittle,description,imageUrl,newsUrl,author,date} = props;
    return (
      <div className='news-card'>
        <div className="news-card-img-wrap">
          <img src={!imageUrl?"https://www.livemint.com/lm-img/img/2023/08/26/600x338/2-0-761225309-iStock-14634366-XXXLARGE-0_1680328376321_1693051199444.jpg":imageUrl} className="news-card-img" alt="..."/>
        </div>
        <div className="news-card-body">
          <h5 className="news-card-title">{tittle}</h5>
          <p className="news-card-desc">{description}</p>
          <p className="news-card-meta">By <strong>{!author?"Unknown":author}</strong> on {new Date(date).toTimeString()}</p>
          <a href={newsUrl} target='blank' className="btn btn-sm text-white news-card-btn">Read More</a>
        </div>
      </div>
    )
  }


export default NewsItem
