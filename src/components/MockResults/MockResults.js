import React from 'react'

const getContent = (result) => {
  if(result.content) {
    if(typeof result.content[0] === 'string') {
      return result.content[0]
    }
    return result.content.subTitle;
  }
}

const MockResults = ({results}) => { return (
  <>
    {results && (
      <div className="searchDiv">
        <h2 className="margin-10 text-uppercase">SEARCH Results </h2>
        
        <ul>
          {results.map(result => {return (
            <li>
              <a href="/">
                <h5 className="text-uppercase">
                  {result.title}            
                </h5>
              </a>
              <p>{getContent(result)}</p>
            </li>
          )})}
        </ul>
      </div>
    )} 
  </> 
)}

export default MockResults