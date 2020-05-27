import React from 'react'
import {mockSearchResponse} from '../../mocks/summary';
import MockResults from '../MockResults/MockResults';

const MenuCard = ({searchItems}) => 
  <>
    <div className="card">
      { !searchItems && 
        <div className="chapter-container">
          <h1>Finding Our Way</h1>
        </div> 
      }
        <div style={!searchItems ? {columnCount: 3} : {columnCount: 1}}>
          { searchItems && <MockResults /> } 
          { !searchItems && 
          <>
            <div>
              <h2 className="text-uppercase">INTRODUCTION</h2>
              <ul>
                {mockSearchResponse[0].content.map(
                  item => (<li><a href="/"><h5 className="text-uppercase">{item}</h5></a></li>)
                )}
              </ul>

              <h2 className="margin-10 text-uppercase">
                Part 1 <br />
                B-f brand building principles
              </h2>
              <h6 className="margin-10">Chapter 1</h6>
              <h6>Brand Foundations</h6>
              <ul>
                {mockSearchResponse[1].content[0].subContent.map(
                  item => (<li><a href="/"><h5 className="text-uppercase">{item}</h5></a></li>)
                )}            
              </ul>

              <h6 className="margin-10">Chapter 2</h6>
              <h6>Bf Growth Framework</h6>

              <h6 className="margin-10">Chapter 2.1</h6>
              <h6>Mental Availability</h6>
              <ul>
                {mockSearchResponse[1].content[2].subContent.map(
                  item => (<li><a href="/"><h5 className="text-uppercase">{item}</h5></a></li>)
                )}  
              </ul>
            </div>
            <div>
              <h6 className="margin-10">Chapter 2.2</h6>
              <h6>Physical Availability</h6>
              <ul>
              {mockSearchResponse[1].content[3].subContent.map(
                item => (<li><a href="/"><h5 className="text-uppercase">{item}</h5></a></li>)
              )} 
              </ul>

              <h6 className="margin-10">Chapter 3</h6>
              <h6>B-f Brand building capabilities</h6>

              <h2 className="margin-10 text-uppercase">
                Part 2 <br />
                principles into <br /> action{" "}
              </h2>

              <h6 className="margin-10">Chapter 4</h6>
              <h6>Strategic Planning</h6>
              <ul>
                {mockSearchResponse[2].content[0].subContent.map(
                  item => (<li><a href="/"><h5 className="text-uppercase">{item}</h5></a></li>)
                )} 
              </ul>

              <h6 className="margin-10">Chapter 5</h6>
              <h6>Business Activity Measurement</h6>
              <ul>
                {mockSearchResponse[2].content[1].subContent.map(
                  item => (<li><a href="/"><h5 className="text-uppercase">{item}</h5></a></li>)
                )} 
              </ul>
            </div>

            <div>
              <h6 className="margin-10">Chapter 6</h6>
              <h6>Drinking Business Results</h6>
              <ul>
                {mockSearchResponse[2].content[2].subContent.map(
                  item => (<li><a href="/"><h5 className="text-uppercase">{item}</h5></a></li>)
                )} 
              </ul>

              <h6 className="margin-10">Chapter 7</h6>
              <h6>Inclusive & Responsible Marketing</h6>
              <ul>
                {mockSearchResponse[2].content[3].subContent.map(
                  item => (<li><a href="/"><h5 className="text-uppercase">{item}</h5></a></li>)
                )} 
              </ul>

              <h2 className="margin-10 text-uppercase">summary and close</h2>
              <h2 className="margin-10 text-uppercase">Appendix </h2>

              <h6 className="margin-10">Industry and Category Information</h6>

              <p className="margin-10 text-uppercase font-05">
                haven't found what you're looking for?
              </p>
            </div>
          </>
          }
        </div>
    </div>
  </> 

export default MenuCard