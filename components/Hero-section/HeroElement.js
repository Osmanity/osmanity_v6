import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";
import styled from "styled-components";

export const HeroContainter = styled.div`
  /* background-image: ${(props) => `url(${props.imgUrl})`}; */
  background-size: contain;
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  /* min-height: 900px; */
  /* background-image: url('../../Images/banner-bg.png'); */
  height: 800px;
  min-width: 100%;
  /* max-width: 1100px; */
  /* background: #0c0c0c; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 0 10px; */
  /* height: 800px; */
  /* padding-top: 150px; */
  /* height: 60vh; */
  position: relative;
  z-index: 1;

  :before {
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }

  @media screen and (max-width: 768px) {
    /* padding: 200px 10px; */
  }

  /* Add :before styles */
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const HeroContent = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;

  grid-template-areas: "col2 col1";
  @media screen and (max-width: 768px) {
    grid-template-areas: "col2 col2" "col1 col1";
  }
`;

export const Column1 = styled.div`
  /* margin-bottom: 15px; */
  /* padding: 0 15px; */
  grid-area: col1;
  @media screen and (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const Column2 = styled.div`
  /* margin-bottom: 15px; */
  /* padding: 0 15px; */
  grid-area: col2;
  @media screen and (max-width: 768px) {
    padding: 0 10px;
  }
  justify-self: center;
  align-self: center;
  align-content: center;
`;

export const TextWrapper = styled.div`
  max-width: 650px;
  /* padding-top: 15px; */
  padding-bottom: 0px;
  margin: 60px;
`;

export const TopLine = styled.p`
  /* color: #f7f8fa; */
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  /* background: linear-gradient(
    90.21deg,
    rgba(170, 54, 124, 0.5) -5.91%,
    rgba(74, 47, 189, 0.5) 111.58%
  );
  border: 1px solid rgba(255, 255, 255, 0.5); */
`;

export const HeroH1 = styled.h1`
  text-align: left;
  /* font-size: 6vw; */
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 1;
  /* margin-bottom: 20px; */
  display: block;
  color: white;
  /* font-size: clamp(20px, 1rem + 10vw, 3rem); */
`;

export const HeroP = styled.p`
  /* margin-top: 24px; */
  /* text-align: center; */
  /* max-width: 600px; */

  /* color: #b8b8b8; */
  /* font-size: 18px; */
  font-size: clamp(0.5rem, 1rem + 5vw, 18px);
  letter-spacing: 0.8px;
  line-height: 1.5em;
  width: 96%;

  /* @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  } */

  @media screen and (max-width: 340px) {
    font-size: 14px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  padding: 20px 0;
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 420px;
  max-height: 600px;
  /* margin-top: 10px; */
  @media screen and (max-width: 1072px) {
    width: 380px;
    max-height: 380px;
  }
  @media screen and (max-width: 946px) {
    width: 320px;
    max-height: 320px;
  }
  @media screen and (min-width: 340px) and (max-width: 500px) {
    margin-top: 80px;
  }
  @media screen and (max-width: 365px) {
    /* margin-top: 90px; */
    width: 280px;
    max-height: 280px;
  }
  @media screen and (max-width: 320px) {
    width: 240px;
    max-height: 240px;
  }
  animation: updown 5s linear infinite;
  @keyframes updown {
    0% {
      transform: translateY(-10px);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(-10px);
    }
  }

  @media screen and (min-width: 768px) {
    @keyframes updown {
      0% {
        transform: translateY(-20px);
      }
      50% {
        transform: translateY(20px);
      }
      100% {
        transform: translateY(-20px);
      }
    }
  }

  border-radius: 1000px;

  /* width: 100%; */
  margin: 0 0 10px 0;
  padding-right: 0;
`;
