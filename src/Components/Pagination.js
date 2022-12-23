import React from 'react'

const Pagination = ({postperpage,totalpage,paginate }) => {
    let pagenumber=[];
    for (let i=1; i<Math.ceil(totalpage/postperpage);i++) {
        pagenumber.push(i)
    }
  return (
    <div className='lets'>
      <ul>
        {pagenumber.map(number => (
            <li key={number}><a  onClick={()=>paginate(number)} href="#"  className="rinaa">{number}</a> </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination;
