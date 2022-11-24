import React from 'react'
import './Testimonial.css'
import {Swiper , SwiperSlide} from 'swiper/react'
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'

const Testimonial = () => {

    const clients = [
        {
            img: profilePic1,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis earum impedit voluptate id esse maxime, enim dolor sunt, odit molestiae, minus quasi nemo ipsum veniam expedita rerum. Perferendis, maxime iure. Omnis voluptatibus ipsam iste, hic ut recusandae ipsa nulla distinctio necessitatibus, numquam autem aliquid fugit velit incidunt eveniet nobis? Accusamus."
        },
        {
            img: profilePic2,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis earum impedit voluptate id esse maxime, enim dolor sunt, odit molestiae, minus quasi nemo ipsum veniam expedita rerum. Perferendis, maxime iure. Omnis voluptatibus ipsam iste, hic ut recusandae ipsa nulla distinctio necessitatibus, numquam autem aliquid fugit velit incidunt eveniet nobis? Accusamus."
        },
        {
            img: profilePic3,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis earum impedit voluptate id esse maxime, enim dolor sunt, odit molestiae, minus quasi nemo ipsum veniam expedita rerum. Perferendis, maxime iure. Omnis voluptatibus ipsam iste, hic ut recusandae ipsa nulla distinctio necessitatibus, numquam autem aliquid fugit velit incidunt eveniet nobis? Accusamus."
        },
        {
            img: profilePic4,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis earum impedit voluptate id esse maxime, enim dolor sunt, odit molestiae, minus quasi nemo ipsum veniam expedita rerum. Perferendis, maxime iure. Omnis voluptatibus ipsam iste, hic ut recusandae ipsa nulla distinctio necessitatibus, numquam autem aliquid fugit velit incidunt eveniet nobis? Accusamus."
        },
    ]
  return (
    
    <div className="t-wrapper">
        <div className="t-heading">
            <span>Clients always get </span>
            <span>Exceptional Work </span>
            <span>From me... </span>
            <div className="blur t-blur1" style={{background: "var(--purple)"}}></div>
            <div className="blur t-blur2" style={{background: "var(--skyblue)"}}></div>
            
        </div>

        {/* Slider */}

        <Swiper 
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable: true}}>

            {
                clients.map((client, index)=>{
                    return(
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                            <img src={client.img} alt="" />
                            <span>{client.review}</span>
                            </div>
                           
                        </SwiperSlide>
                    )
                })
            }

        </Swiper>


    </div>
  )
}

export default Testimonial
