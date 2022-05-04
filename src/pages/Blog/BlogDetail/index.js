import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './style.scss'
import {AiOutlineHeart, AiFillHeart, AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai'
import {FaFacebookF, FaPinterest} from 'react-icons/fa'
import {blogs as dataBlog, posts} from '../constants'
import Comments from 'pages/Comment/Comments'

function DetailBlog() {
  const { blogid } = useParams();
  const post = dataBlog.find((item) => (item.id === +blogid));
  const [heart,setHeart] = useState(false);
  const handleClickHeart = () => {
    setHeart(!heart)
  }
  useEffect(() => {
    window.scrollTo(0, 400);
  }, []);

  return (
    <div className='detailBlog'>
      <div className='detailBlog__slider'>
        <h1>Verdure</h1>
      </div>
      <div className='detailBlog__container'>
        <div className='detailBlog__content'>
          <img src={post.imgBg} alt='pictureBlog'/>
          <span className='detailBlog__author'>{post.infoBg}</span>
          <h1 className='detailBlog__title'>{post.titleBg}</h1>
          <p className='detailBlog__text'>{post.desBg}</p>
          <p className='detailBlog__text'>Partili enem amir. Cum soluta alteru, novut dicam te velid, vix ut des ert mltera indoctum. 
              Ne sabeo legendo vel, ue duoris debet paulo vocibus, acc usata facilisis qui etui. 
              Vivendo en reprehe ndunt his, ne igiure equidem vel. Singulis oratio mel, 
              sea ei integredi disse ntias. In e vocent cetero omittam. Cum iuvaret deserui dissentiet at. 
              Mei facete pertinax, at meliore sapientem deterruisset nam sumi tantas de nilidi. 
              Vel case alterum senserit, vis harum graecis dissentias et. Ut vim impedit temporibus, 
              eum in novum sensibus, rationi scriptorem.
          </p>
          <p className='detailBlog__textIl'>"Oratio singulis mel ad, sea ei integre dissentias. Et vel vocent ceteros omittam."</p>
          <p className='detailBlog__text'>Singulis mel, sea ei integredi disse un ntias. Et e vocent cetero omitam. 
              Cum iuvaret deserui issent et at. Mei facete pertinax, 
              at meliore sapient deterru isset nam sumi tantas de nilidi Vis eu ubique primis, 
              de traxit delica tissimi cum ut. Mel eu case tacite, eius legimus deletus quo ne, 
              scripta officiis ut vix. Ex vim porro mundi iriur, per id nulla eligeni. Ne sea aliqu ip eruditi. 
              Pri ei nost animal corumpt, us discer in veni eiti. Legere denie mean.</p>
          <hr />
          <div className='detailBlog__info'>
            <div>
              <span>FRESH, NATURE</span>
              <span>3 Comments</span>
              <button onClick={handleClickHeart}>{heart ? <AiOutlineHeart /> : <AiFillHeart />}</button>
            </div>
            <div className='detailBlog__info-ic'>
              <FaFacebookF />
              <AiOutlineTwitter />
              <AiFillLinkedin />
              <FaPinterest />
            </div>
          </div>
          <h4 className='detailBlog__relate'>RELATED POSTS</h4>
          <div className='detailBlog__related'>
            {
              posts.map((post) => (
              <div className='detailBlog__related-item' key={post.id}>
                <img src={post.imgPs} alt='pictureRelated' />
                <h5>{post.titlePs}</h5>
                <span>{post.dPs} / ADMIN</span>
              </div>
              ))
            }
          </div>
        </div>
      </div>
      <Comments currentUserId="1"/>
    </div>
  )
}

export default DetailBlog