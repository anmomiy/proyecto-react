//Material UI
import {Grid} from '@mui/material'
//Components
import CardItem from '../Item/Item'
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper"
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation";
//CSS
import './ItemListSwiper.css'
const ItemListSwiper = ({title, products}) =>{

    return(
        <div className="cardList-container">
            <h2>{title}</h2>
            <Grid container spacing={2}>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    900: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },
                    1400: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                      }
                }}
            >
                {
                    products.map(e =>{
                        return(
                            <SwiperSlide key={e.itemName}>
                            <Grid item >
                                <CardItem itemName={e.itemName} image={e.image} price={e.price} description={e.description}  id={e.id}/> 
                            </Grid>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>    
            </Grid>
        </div>
    )
}

export default ItemListSwiper;