import React, { useEffect, useState } from 'react'
import './style.scss'
import Blog from './blog'
import {GiTeapot} from 'react-icons/gi'
import BlogsRight from './blogsRight'
import {blogs as dataBlog} from './constants'

function Blogs() {
  const initPagination = 3;
  const dataFirst = dataBlog.slice(0);
  const [blog, setBlog] = useState(() => dataFirst.slice(0, initPagination));
  const [blogs, setBlogs] = useState(dataFirst);
  const [check, setCheck] = useState([]);
  const [isSelect, setIsSelect] = useState(1);
  const [nextPagination, setNextPagination] = useState(initPagination);

  const handleFindBlog = (item) => {
    const finded = dataFirst.filter((find) => find.titleBg.toLowerCase().includes(item.toLowerCase()));
    setBlog(finded.slice(0, initPagination));
    setBlogs(finded);
    setNextPagination(initPagination)
    finded.length < 1 ? setCheck('not found') : setCheck('find');
  }
  const number = [];
  for (var i = 1; i <= Math.ceil(blogs.length/initPagination); i++) {
    number.push(i);
  }

  const handleNextPagination = (item) => {
    const a = (item + 1) * initPagination;
    setBlog(blogs.slice(a - initPagination, a));
    setNextPagination(a);
    setIsSelect(item);
    }
  const handlePrePagination = (item) => {
    const a = (item - 1) * initPagination;
    setBlog(blogs.slice(a - initPagination, a));
    setNextPagination(a);
    setIsSelect(item);
  }

  useEffect(() => {
    setIsSelect(nextPagination/initPagination);
  },[nextPagination])

  const handleSelectPg = (item) => {
    const a = item * initPagination;
    setBlog(blogs.slice(a - initPagination, a));
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
            blog.map((blog) => (
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
            <button onClick={() => handleNextPagination(isSelect)} disabled={nextPagination >= blogs.length} >{'>'}</button>
          </div>
        </div>
        <BlogsRight handleFindBlog={handleFindBlog} />
      </div>
    </div>
  )
}
export default Blogs