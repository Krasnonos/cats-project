import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import './customSwiper.css';
import { CatsTextDescr } from '../';
import { ImageWrap, ImgCard, SwiperWrap } from './BreedFullDescr.styled';

export const BreedFullDescr = ({ catsInfo }) => {
  return (
    <>
      <SwiperWrap>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={0}
          slidesPerView={1}
        >
          {catsInfo.map(image => (
            <SwiperSlide key={image.id}>
              <ImageWrap>
                <ImgCard src={image.url} alt={'image.breeds[0].name'} />
              </ImageWrap>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrap>
      <CatsTextDescr catsInfo={catsInfo} />
    </>
  );
};
