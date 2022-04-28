import BlogsRight from '../blogsRight'
import React, { useState } from 'react'
import './style.scss'
import {AiOutlineHeart, AiFillHeart, AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai'
import {FaFacebookF, FaPinterest} from 'react-icons/fa'

function DetailBlog() {
  const [heart,setHeart] = useState(false);
  const handleClickHeart = () => {
    setHeart(!heart)
  }
  return (
    <div className='detailBlog'>
      <div className='detailBlog__slider'>
        <h1>Verdure</h1>
      </div>
      <div className='detailBlog__container'>
        <div className='detailBlog__content'>
          <img src='https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/blog-img-1.jpg' alt='pictureBlog'/>
          <span className='detailBlog__author'>ADMIN  12/04/2018  ORGANIC, TEA</span>
          <h1 className='detailBlog__title'>DAILY DETOX TEA</h1>
          <p className='detailBlog__text'>Falli debet est. Est error soluta. Mazim dicam te velid, 
            vix ut aff ert altera indoctum. Ne habeo legendo vel, 
            eu duoris debet paulo vocibus, acca usata facilisis qui etui. 
            Eu vivendo reprehe ndunt his, te iriure equidem cut. Oratio singulis mel, 
            sea ei integredi disse ntias. Et e vocent cetero omitam. Cum iuvaret deserui dissentiet at. 
            Mei facete pertinax, at meliore sapientem deterruisset nam sumi tantas de nilidi.</p>
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
            <div className='detailBlog__related-item'>
              <img src='https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/blog-video-img.jpg' alt='pictureRelated' />
              <h5>BEST TEA FLAVORS</h5>
              <span>12/04/2018 / ADMIN</span>
            </div>
            <div className='detailBlog__related-item'>
              <img src='https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/blog-img-2.jpg' alt='pictureRelated' />
              <h5>ENJOY THE DAY</h5>
              <span>12/04/2018 / ADMIN</span>
            </div>
            <div className='detailBlog__related-item'>
              <img src='https://verdure.qodeinteractive.com/wp-content/uploads/2018/04/blog-img-3.jpg' alt='pictureRelated' />
              <h5>BLOOMING TEA</h5>
              <span>12/04/2018 / ADMIN</span>
            </div>
          </div>
        </div>
        <BlogsRight />
      </div>
    </div>
  )
}

export default DetailBlog