import React from "react";
import styled from "styled-components";
import bgImage from "../upload/background.jpg";
import bgSkate from "../upload/skate-removebg-preview.jpg";
import bgSkateTwo from "../upload/sports-one-person-action.jpg";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh;
`;
export const Container = styled.div`
  display: grid;
  grid-template-areas: "menu content";
  grid-template-columns: 220px 1fr;
  grid-template-rows: 100%;
  max-width: 1240px;
  width: 100%;
  height: auto;
  margin: 0 auto;
  border-radius: 20px;
  background-color: #1f1d2b;
  box-shadow: 0 20px 50px rgb(0 0 0 / 30%);
  @media screen and (max-width: 768px) {
    grid-template-columns: 90px 1fr;
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  grid-area: header;
  box-sizing: border-box;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 30px;
`;
export const ContentContainer = styled.div`
  display: grid;
  grid-area: content;
  grid-template-areas: "header" "content";
  grid-template-rows: auto 1fr;
  grid-template-columns: 100% 1fr;
  height: 100%;
  width: 100%;
  flex-direction: column;
`;
export const SideBarContainer = styled.div`
  display: flex;
  grid-area: menu;
  grid-template-rows: 220px 1fr;
  height: 100%;
  width: 220px;
  padding: 30px;
  flex-direction: column;
  box-sizing: border-box;
  @media screen and (max-width: 1024px) {
    border-right: 1px solid rgb(128 129 145 / 24%);  
  }
  @media screen and (max-width: 768px) {
    border-right: none;
  }
`;
export const LogoContainer = styled.div`
  display: flex;
  color: #fff;
  font-size: 19px;
  font-weight: 600;
  line-height: 34px;
  margin-bottom: 30px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
   display: none;
  }
`;
export const MediaContainer = styled.div`
  display: flex;
  grid-area: content;
  flex-direction: column;
  width: 100%;
  padding: 0 30px 30px;
  box-sizing: border-box;
`;
export const MediaHeader = styled.div`
  display: flex;
  font-size: 30px;
  color: #fff;
  font-weight: 700;
  margin-bottom: 20px;
  padding: 0 30px;
  background: linear-gradient(
    to bottom,
    #1f1d2b 0%,
    #1f1d2b 78%,
    rgba(31, 29, 43, 0) 100%
  );
`;
export const Blogs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
export const MediaSubtitle = styled.div`
  display: flex;
  font-size: 24px;
  font-weight: 500;
  color: #fff;
  padding: 0 30px;
  margin-bottom: 20px;
`;
export const VideoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin-bottom: 30px;
  @media screen and (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
export const First = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #31abbd;
  background-image: url(${bgSkate});
  background-size: 75%;
  background-position: center;
  width: 70%;
  padding: 30px;
  border-radius: 20px;
  background-position-x: 205px;
  background-repeat: no-repeat;
  margin-right: 20px;
  @media screen and (max-width: 768px) {
    //display: flex;
    //flex-direction: column;
    margin-right: 0;
    margin-bottom: 20px;
    width: 100%;
  }
`;
export const FirstBlogTitle = styled.div`
  display: flex;
  font-size: 25px;
  max-width: 16ch;
  font-weight: 600;
  letter-spacing: 1px;
  color: #fff;
  margin-bottom: 30px;
`;
export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const Author = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
`;
export const AuthorDetail = styled.div`
  display: flex;
  flex-direction: column;
`;
export const AuthorName = styled.div`
  display: flex;
  font-size: 15px;
  color: #fff;
  font-weight: 500;
  margin-bottom: 8px;
`;
export const AuthorInfo = styled.div`
  display: flex;
  font-size: 13px;
  font-weight: 400;
  color: #fff;
  &.second {
    margin-bottom: 15px;
  }
`;
export const AuthorImg = styled.div`
  display: flex;
  box-sizing: border-box;
  background-size: cover;
  background-image: ${({ image }) => `url(${image})`};
  --size: 60px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
`;
export const Second = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${bgSkateTwo});
  background-color: unset;
  background-position-x: 0;
  background-size: 139%;
  width: 35%;
  border-radius: 20px;
  filter: saturate(1.4);
  padding: 30px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const SecondBlogTitle = styled.div`
  display: flex;
  font-size: 25px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #fff;
  margin-bottom: 10px;
`;
export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
  border-bottom: 1px solid #8081913d;
  @media screen and (max-width: 768px) {
    border-bottom: none;
  }
`;
export const SideTitle = styled.div`
  display: flex;
  margin-bottom: 24px;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: #808191;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const SideBarMenuContainer = styled.div`
  display: flex;
  align-items: center;
  color: #808191;
  margin-bottom: 25px;
  &:hover {
    color: #fff;
    svg {
      fill: #fff;
    }
  }
`;
export const MenuIcon = styled.div`
  display: flex;
  background-color: ${({ active }) => (active ? "#ff7551" : "#353340")};
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 8px;
  border-radius: 10px;
  margin-right: 15px;
  svg {
    fill: ${({ active }) => (active ? "#fff" : "#808191")};
    width: 80%;
    height: auto;
  }
  :hover {
    .trend {
      background-color: #32a7e2;
    }
  }
`;
export const MenuName = styled.div`
  display: flex;
  font-weight: 600;
  cursor: pointer;
  color: ${({ active }) => (active ? "#fff" : "none")};
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const MenuCategory = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  overflow: hidden;
`;
export const SearchBar = styled.div`
  display: flex;
  height: 34px;
  width: 100%;
  max-width: 450px;
  margin-right: 10px;
  //@media screen and (max-width: 768px) {
  //  width: 50%;
  //}
  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: #353340;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    padding: 0 40px 0 16px;
    box-shadow: 0 0 0 2px rgb(134 140 160 / 2%);
    color: #fff;
  }
`;
export const UserSetting = styled.div`
  display: flex;
  align-items: center;
  .angleDown {
    margin-right: 15px;
  }
  .bell {
    display: flex;
    font-size: 22px;
    cursor: pointer;
    position: relative;
    //:before {
    //  content: "";
    //  position: absolute;
    //  background-color: #f13a2f;
    //  width: 5px;
    //  height: 5px;
    //  border-radius: 50%;
    //  right: -6px;
    //  top: 0;
    //}
  }
  svg {
    color: #808191;
  }
`;
export const Profile = styled.div`
  display: flex;
  background-size: cover;
  background-image: ${({ user }) => `url(${user})`};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const UserName = styled.div`
  display: flex;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  margin-right: 5px;
`;
export const FooterContainerVideo = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  background-color: #252936;
  &:hover {
  video {
   //transform: scale(1.6);
   //transform-origin: center;
   //transition: 0.4s;
`;
// export const VideoAuthorImg = styled.div`
//   display: flex;
//   position: absolute;
//   box-sizing: border-box;
//   background-size: cover;
//   background-image: ${({ image }) => `url(${image})`};
//   --size: 45px;
//   width: var(--size);
//   height: var(--size);
//   border-radius: 50%;
//   top: 103px;
//   right: 15px;
// `;
export const NameUser = styled.div`
  display: flex;
  color: #808191;
  font-size: 17px;
  line-height: 1.4em;
  font-weight: 500;
  padding: 10px 10px 0px 10px;
`;
export const NameVideo = styled.div`
  display: flex;
  color: #808191;
  font-size: 15px;
  line-height: 1.4em;
  font-weight: 500;
  padding: 10px 10px 0px 10px;
`;
export const Views = styled.div`
  display: flex;
  color: #808191;
  font-size: 12px;
  line-height: 1.4em;
  font-weight: 500;
  padding: 10px 10px 0px 10px;
  margin-bottom: 10px;
`;
