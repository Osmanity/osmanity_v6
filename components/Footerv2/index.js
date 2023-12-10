"use client";

import React, { useContext, useEffect } from "react";

import { BsGithub } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";

import {
  FooterContainer,
  FooterInfoItems,
  FooterInfoText,
  FooterLink,
  FooterLinkItems,
  FooterLinkLastItems,
  FooterLinksContainer,
  FooterLinkTitle,
  FooterLinkWrapper,
  FooterSubtitle,
  FooterTitle,
  FooterWrap,
  HighLigth,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";

const Footer = () => {
  return (
    <div className="mt-48">
      {/* <RocketFooterSection /> */}
      <FooterContainer>
        <FooterWrap>
          <FooterTitle>Osmanity</FooterTitle>
          <FooterSubtitle>
            | Leading the way in tech for humanity!
          </FooterSubtitle>
          <FooterLinksContainer>
            <FooterLinkWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Info</FooterLinkTitle>
                <FooterLink href="/hitta-oss">About</FooterLink>
                <FooterLink href="/signin">Terms and Conditions</FooterLink>
                <FooterLink href="/signin">Privacy Policy</FooterLink>
                <FooterLink href="/signin">Payment Methods</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Service</FooterLinkTitle>
                <FooterLink href="/signin">Website/App building</FooterLink>
                <FooterLink href="/signin">MobileApp building</FooterLink>
                <FooterLink href="/signin">Pricing/Plans</FooterLink>
                <FooterLink href="/signin">Hire me!</FooterLink>
              </FooterLinkItems>
            </FooterLinkWrapper>
            <FooterLinkWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Admin</FooterLinkTitle>

                <FooterLink href="/Dashboard">Dashboard</FooterLink>
              </FooterLinkItems>
            </FooterLinkWrapper>
          </FooterLinksContainer>
          <FooterInfoItems>
            {/* <FooterInfoText>
              Phone: <br />
              <HighLigth>076-058-7355</HighLigth>
            </FooterInfoText>
            <FooterInfoText>
              Mail: <br />
              <HighLigth>Ibrahim@osmanity.com</HighLigth>
            </FooterInfoText>
            <FooterInfoText>
              Location: <br />
              <HighLigth>Stockholm</HighLigth>
            </FooterInfoText> */}
            <div style={{ fontSize: "14px", marginBottom: "5px" }}>
              Phone: <br />
              <span style={{ fontWeight: "700" }}>076-058-7355</span>
            </div>
            <div style={{ fontSize: "14px", marginBottom: "5px" }}>
              Mail: <br />
              <span style={{ fontWeight: "700" }}>Ibrahim@osmanity.com</span>
            </div>
            <div style={{ fontSize: "14px", marginBottom: "5px" }}>
              Location: <br />
              <span style={{ fontWeight: "700" }}>Stockholm</span>
            </div>
          </FooterInfoItems>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialIcons>
                <SocialIconLink
                  href="https://github.com/Osmanity"
                  target="blank"
                  aria-label="Faceebok"
                >
                  <BsGithub />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.linkedin.com/in/ibrahim-osman-aa2294153/"
                  target="blank"
                  aria-label="Instagram"
                >
                  <GrLinkedinOption />
                </SocialIconLink>
                <SocialIconLink
                  href="https://twitter.com/IbrahimOsmanity"
                  target="blank"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </SocialIconLink>
              </SocialIcons>
              <WebsiteRights>
                © Osmanity {new Date().getFullYear()}. All Rights Reserved
              </WebsiteRights>
            </SocialMediaWrap>
          </SocialMedia>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              paddingTop: 20,
            }}
          >
            <p
              style={{
                display: "flex",
                // alignItems: "center",
                // justifyContent: "center",
                color: "#666",
                // padding: 5,
                // paddingTop: 15,
                fontSize: 10,
                opacity: "50%",
              }}
            >
              {"</> & Crafted With "}
            </p>
            <p
              style={{
                display: "flex",
                // alignItems: "center",
                // justifyContent: "center",
                color: "#666",
                // padding: 5,
                // paddingTop: 15,
                fontSize: 10,
                opacity: "25%",
                paddingLeft: 1,
              }}
            >
              {" 🖤 "}
            </p>
            <p
              style={{
                display: "flex",
                // alignItems: "center",
                // justifyContent: "center",
                color: "#666",
                // padding: 5,
                // paddingTop: 15,
                fontSize: 10,
                opacity: "50%",
                paddingLeft: 1,
              }}
            >
              {"By Osmanity"}
            </p>
          </div>
        </FooterWrap>
      </FooterContainer>
    </div>
  );
};

export default Footer;
