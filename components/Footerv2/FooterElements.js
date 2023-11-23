"use client";

import Link from "next/link";
import styled from "styled-components";
// import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  /* margin-top: 320px; */
  /* position: relative; */
  /* background-color: #101522; */
  background-color: #121212;
  /* display: flex;
  bottom: 0; */
  width: 100%;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;

  @media screen and (max-width: 420px) {
    padding: 30px 14px;
  }
`;

export const FooterTitle = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 10px;
  text-transform: uppercase;
  text-align: center;
  /* padding-left: 30px; */
  justify-content: center;
  align-items: center;
  font-family: "Times New Roman", Times, serif;
  /* margin-bottom: 10px; */
`;

export const FooterSubtitle = styled.h1`
  color: #fff;

  margin-top: 10px;
  font-size: 16px;
  font-weight: 400;
  font-style: italic;
  font-family: Assistant, sans-serif;
  margin-bottom: 16px;
  /* margin-left: 20px; */
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinkWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  /* width: 140px; */
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkLastItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 100px;
  box-sizing: border-box;
  color: #101522;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterInfoItems = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  align-items: center;
  margin: 16px;
  /* text-align: left; */
  text-align: center;

  width: 240px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterInfoText = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const HighLigth = styled.p`
  font-weight: 700;
`;

export const FooterLinkTitle = styled.h1`
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #fff;
    transition: 0.3s ease-out;
    opacity: 60%;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;

  flex-direction: column;

  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-top: 24px;
  /* margin-bottom: 16px; */
  opacity: 40%;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  &:hover {
    color: #fff;
    transition: 0.3s ease-out;
  }
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  &:hover {
    color: #fff;
    transition: 0.3s ease-out;
    opacity: 60%;
  }
`;
