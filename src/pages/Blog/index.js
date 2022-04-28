import React, { useEffect, useState } from 'react'
import './style.scss'
import Blog from './blog'
import {GiTeapot} from 'react-icons/gi'
import BlogsRight from './blogsRight'
import dataBlog from './constants'

function Blogs() {
  const initPagination = 3;
  const dataFirst = dataBlog.slice(0);
  const [data, setData] = useState(() => dataFirst.slice(0, initPagination));
  const [dataB, setDataB] = useState(dataFirst);
  const [check, setCheck] = useState([]);
  const [isSelect, setIsSelect] = useState(1);
  const [nextPagination, setNextPagination] = useState(initPagination);

  const handleFindBlog = (item) => {
    const findTT = dataFirst.filter((find) => find.titleBg.toLowerCase().includes(item.toLowerCase()));
    setData(findTT.slice(0, initPagination));
    setDataB(findTT);
    setNextPagination(initPagination)
    findTT.length < 1 ? setCheck('not found') : setCheck('find');
  }
  const number = [];
  for (var i = 1; i <= Math.ceil(dataB.length/initPagination); i++) {
    number.push(i);
  }

  const handleNextPagination = (item) => {
    const a = (item + 1) * initPagination;
    setData(dataB.slice(a - initPagination, a));
    setNextPagination(a);
    setIsSelect(item);
    }
  const handlePrePagination = (item) => {
    const a = (item - 1) * initPagination;
    setData(dataB.slice(a - initPagination, a));
    setNextPagination(a);
    setIsSelect(item);
  }

  useEffect(() => {
    setIsSelect(nextPagination/initPagination);
  },[nextPagination])

  const handleSelectPg = (item) => {
    const a = item * initPagination;
    setData(dataB.slice(a - initPagination, a));
    setNextPagination(a);
    setIsSelect(item);
  }
  return (
    <div className='blogs'>
      <div className='blogs__sidebar'>
          <h1>RIGHT SIDEBAR</h1>
      </div>
      <div className='blogs__container'>
        <div className='blogs__content'>
          {
            check === 'not found' ? (
              <h1>Không tìm thấy kết quả nào!</h1>
            ) : ''
          }
          {
            data.map((blog) => (
              <Blog
                  key={blog.id}
                  blogid = {blog.id}
                  imgBg = {blog.imgBg}
                  infoBg = {blog.infoBg}
                  titleBg = {blog.titleBg}
                  desBg = {blog.desBg}
                />
            ))
          }
          <div className='blogs__motto'>
            <div className='blogs__motto-wrap'>
              <GiTeapot className='blogs__motto-ic'/>
              <p>"In novum quando vel, euismod similique mnesarchum mel."</p>
              <span>KRISTY MILLER</span>
            </div>
          </div>

          <div className='blogs__pagination'>
            <button onClick={() => handlePrePagination(isSelect)} disabled={nextPagination <= initPagination}>{'<'}</button>
            {
              number.map((i, index) => (
              <span 
              key={index}
              onClick={() => handleSelectPg(i)}
              className = {isSelect === i ? 'blogs__pagination-selected' : 'blogs__pagination-unselected'}
              >
                {i}
              </span>))
            }
            <button onClick={() => handleNextPagination(isSelect)} disabled={nextPagination >= dataB.length} >{'>'}</button>
          </div>
        </div>
        <BlogsRight handleFindBlog={handleFindBlog} />
      </div>
    </div>
  )
}
export default Blogs