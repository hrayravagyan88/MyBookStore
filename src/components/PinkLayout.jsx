import React from 'react'
import FirstSvg from './ICONSVG/FirstSvg';
import SecondSvg from "./ICONSVG/SecondSvg";
import ThirsSvg from "./ICONSVG/ThirsSvg";
import FourthSvg from "./ICONSVG/FourthSvg";
function PinkLayout() {
  return (
<div className="SectionHeading">
        <div className="container-guttered">
          <div className="value-prop-ii">
            <div className="value-prop-ii-shape">
              <FirstSvg />
            </div>
            <div className="value-prop-ii-content" >
              <h4 className= 'font-medium'>Find a book they’ll love</h4>
              <div className="rich-text ">
                <span>
                  <p>Browse the bookshop for the perfect story</p>
                </span>
              </div>
            </div>
          </div>

          <div className="value-prop-ii">
            <div className="value-prop-ii-shape">
              <SecondSvg />
            </div>
            <div className="value-prop-ii-content" >
              <h4 className= 'font-medium'>Find a book they’ll love</h4>
              <div className="rich-text ">
                <span>
                  <p>Browse the bookshop for the perfect story</p>
                </span>
              </div>
            </div>
          </div>

          <div className="value-prop-ii">
            <div className="value-prop-ii-shape">
              <ThirsSvg />
            </div>
            <div className="value-prop-ii-content" >
              <h4 className= 'font-medium'>Find a book they’ll love</h4>
              <div className="rich-text ">
                <span>
                  <p>Browse the bookshop for the perfect story</p>
                </span>
              </div>
            </div>
          </div>

          <div className="value-prop-ii">
            <div className="value-prop-ii-shape">
              <FourthSvg />
            </div>
            <div className="value-prop-ii-content" >
              <h4 className= 'font-medium'>Find a book they’ll love</h4>
              <div className="rich-text ">
                <span>
                  <p>Browse the bookshop for the perfect story</p>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
  )
}

export default PinkLayout
