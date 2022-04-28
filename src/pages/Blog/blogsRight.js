import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

const tags = [
    'BALANCE (1)',
    'FRESH (3)',
    'HEALTH (3)',
    'HERBS (9)',
    'NATURE (7)',
    'WELLNESS (2)'
]
function BlogsRight({handleFindBlog}) {
  const [value, setValue] = useState('')
  return (
    <div className='blogs__right'>
          <div className='blogs__search'>
            <input 
            type="text" 
            placeholder='Type your search' 
            onChange={e => setValue(e.target.value)} 
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
              <Post 
                imgPs='https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/blog-video-img-150x150.jpg'
                titlePs='Best Tea Flavors'
                dPs='12/04/2018'
              />
              <Post 
                imgPs='https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/blog-img-1-150x150.jpg'
                titlePs='Daily Detox Tea'
                dPs='12/04/2018'
              />
              <Post 
                imgPs='https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/blog-img-2-150x150.jpg'
                titlePs='Enjoy The Day'
                dPs='12/04/2018'
              />
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