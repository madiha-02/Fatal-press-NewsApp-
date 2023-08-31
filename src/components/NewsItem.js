import React from 'react'

const NewsItem=(props)=> {
   
    let {tittle,description,imageUrl,newsUrl,author,date} = props;
    return (
      <div className='my-3'>
        <div className="card">
  <img src={!imageUrl?"https://www.livemint.com/lm-img/img/2023/08/26/600x338/2-0-761225309-iStock-14634366-XXXLARGE-0_1680328376321_1693051199444.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{tittle}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-danger">By {!author?"Unknown":author} on {new Date(date).toTimeString()}</small></p>
    <a href={newsUrl} target='blank' className="btn btn-sm btn-dark">Read More</a>
  </div>
  </div>
      </div>
    )
  }


export default NewsItem
