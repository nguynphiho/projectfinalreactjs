import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {tags, posts} from './constants'

function BlogsRight({handleFindBlog}) {
  const [value, setValue] = useState('')
  return (
    <div className='blogs__right'>
          <div className='blogs__search'>
            <input 
            type="text" 
            placeholder='Type your search' 
            onChange={e => handleFindBlog(e.target.value)}
            onKeyDown = {e => {
              if(e.key === 'Enter'){
                return handleFindBlog(value);
              }
            }}
            />
            <button onClick={() => handleFindBlog(value)}>
              <AiOutlineSearch className='blogs__search-ic'/>
            </button>
          </div>
            <span className='blogs__right-title'>CATEGORIES</span>
            <ul>
              <li>Healthy</li>
              <li>Organic</li>
              <li>Relaxation</li>
              <li>Tea</li>
            </ul>
            <span className='blogs__right-title'>LATEST POSTS</span>
            <div className='blogs__right-posts'>
              { posts.map((post) => (
                <Post
                key={post.id}
                imgPs= {post.imgPs}
                titlePs={post.titlePs}
                dPs={post.dPs}
              />
              ))}
            </div>

            <img src="https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/blog-sidebar-img.jpg" alt="" className='blogs__right-img'/>
            <span className='blogs__right-title'>TAGS</span>
            <div className='blogs__right-tags'>
              {tags.map((tag, index)=>(<span key={index}>{tag}</span>))}
            </div>
        </div>
  )
}
function Post({imgPs,titlePs,dPs}){
    return(
      <div className='blogs__right-item'>
        <img src={imgPs} alt="" />
        <div className='blogs__right-text'>
        <span>{titlePs}</span>
        <p>{dPs}</p>
        </div>
      </div>
    )
}
export default BlogsRight