import React from 'react'
import "./Footer.scss"

const FooterList = ({title, listItem }) => {
  return (
    <div className='footer-list' >
        <h4>{title}</h4>
        <ul>
            {listItem.map((li, i) => {
                return <li key={i}>{li}</li>
            })}
        </ul>
    </div>
  )
}

export default FooterList
