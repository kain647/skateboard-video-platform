import React from "react";
import firstUser from "../upload/57.jpg";
import secondUser from "../upload/18.jpg";
import andy from "../upload/94.jpg";
import gerard from "../upload/27.jpg";
import john from "../upload/74.jpg";
import budi from "../upload/38.jpg";
import one from "../upload/1904006997.mp4";
import two from "../upload/1977849318.mp4";
import three from "../upload/1903896904.mp4";
import fourth from "../upload/1485588716.mp4";
import user from "../upload/user.jpg";
import { FaAngleDown } from "react-icons/fa";
import { HiBell } from "react-icons/hi";
import { ReactComponent as SidebarHome } from "../upload/home.svg";
import { ReactComponent as SidebarRight } from "../upload/right-arrow.svg";
import { ReactComponent as SidebarStreaming } from "../upload/live-streaming.svg";
import { ReactComponent as SidebarPlaylist } from "../upload/playlist.svg";
import { ReactComponent as SidebarBookmark } from "../upload/bookmark-black-shape.svg";
import { ReactComponent as SidebarLiveStream } from "../upload/live.svg";
import { ReactComponent as SidebarTutorial } from "../upload/tutorial.svg";
import { ReactComponent as SidebarCompetition } from "../upload/trophy.svg";
import { ReactComponent as SidebarCommunity } from "../upload/community.svg";
import {
  MainContainer,
  Container,
  Header,
  ContentContainer,
  SideBarContainer,
  MediaContainer,
  MenuContainer,
  SideBarMenuContainer,
  MenuIcon,
  MenuName,
  MenuCategory,
  SearchBar,
  UserSetting,
  Profile,
  UserContainer,
  UserName,
  SideTitle,
  LogoContainer,
  MediaHeader,
  Blogs,
  First,
  Second,
  FirstBlogTitle,
  SecondBlogTitle,
  MediaSubtitle,
  VideoContainer,
  FooterContainerVideo,
  NameUser,
  NameVideo,
  Views,
  Author,
  AuthorImg,
  AuthorDetail,
  AuthorName,
  AuthorInfo,
  AuthorContainer,
  // VideoAuthorImg
} from "./styled";

const Skateboard = props => {
  const sideBarMenu = [
    {
      sideBarIcon: SidebarHome,
      sideBarName: "Discover",
      active: "true"
    },
    {
      sideBarIcon: SidebarRight,
      sideBarName: "Trending"
    },
    {
      sideBarIcon: SidebarStreaming,
      sideBarName: "Streaming"
    },
    {
      sideBarIcon: SidebarPlaylist,
      sideBarName: "Playlist"
    },
    {
      sideBarIcon: SidebarBookmark,
      sideBarName: "Bookmark"
    }
  ];
  const sideBarCategory = [
    {
      sideBarIcon: SidebarLiveStream,
      sideBarName: "Live Stream"
    },
    {
      sideBarIcon: SidebarTutorial,
      sideBarName: "Tutorial"
    },
    {
      sideBarIcon: SidebarCompetition,
      sideBarName: "Competition"
    },
    {
      sideBarIcon: SidebarCommunity,
      sideBarName: "Community"
    }
  ];
  const videoBox = (props = [
    {
      video: one,
      iconUser: andy,
      nameUser: "Andy William",
      nameVideo: "Basic how to ride your skateboard comfortly",
      views: "54K views • 1 week ago"
    },
    {
      video: two,
      iconUser: gerard,
      nameUser: "Gerard Bind",
      nameVideo: "Prepare for your first skateboard jump",
      views: "42K views • 1 week ago"
    },
    {
      video: three,
      iconUser: john,
      nameUser: "John Wise",
      nameVideo: "Basic equipment to play skateboard safely",
      views: "64K views • 2 week ago"
    },
    {
      video: fourth,
      iconUser: budi,
      nameUser: "Budi Hakim",
      nameVideo: "Tips to playing skateboard on the ramp...",
      views: "50K views • 1 week ago"
    }
  ]);
  return (
    <MainContainer>
      <Container>
        <SideBarContainer>
          <LogoContainer>Skateboard</LogoContainer>
          <MenuContainer>
            <SideTitle>menu</SideTitle>
            {sideBarMenu.map(menu => {
              return <Menu {...menu} />;
            })}
          </MenuContainer>
          <MenuCategory>
            <SideTitle>category</SideTitle>
            {sideBarCategory.map(category => {
              return <Category {...category} />;
            })}
          </MenuCategory>
        </SideBarContainer>
        <ContentContainer>
          <Header>
            <SearchBar>
              <input type="text" placeholder="Search" />
            </SearchBar>
            <UserSetting>
              <Profile user={user} />
              <UserContainer>
                <UserName>Nathan Thompson</UserName>
                <FaAngleDown className="angleDown" />
              </UserContainer>
              <HiBell className="bell" />
            </UserSetting>
          </Header>
          <MediaContainer>
            <MediaHeader>Discover</MediaHeader>
            <Blogs>
              <First>
                <FirstBlogTitle>
                  How to do Basic Jumping and how to landing safely
                </FirstBlogTitle>
                <AuthorContainer>
                  <Author>
                    <AuthorImg image={firstUser} />
                  </Author>
                  <AuthorDetail>
                    <AuthorName>Thomas Hope</AuthorName>
                    <AuthorInfo>53K views • 2 weeks ago</AuthorInfo>
                  </AuthorDetail>
                </AuthorContainer>
              </First>
              <Second>
                <SecondBlogTitle>
                  Skateboard Tips You need to know
                </SecondBlogTitle>
                <AuthorDetail>
                  <AuthorName>Tony Andrew</AuthorName>
                  <AuthorInfo className="second">
                    12K views • 1 weeks ago
                  </AuthorInfo>
                  <AuthorImg image={secondUser} />
                </AuthorDetail>
              </Second>
            </Blogs>
            <MediaSubtitle>Most Watched</MediaSubtitle>
            <VideoContainer>
              {videoBox.map(videos => {
                return <Videos {...videos} />;
              })}
            </VideoContainer>
          </MediaContainer>
        </ContentContainer>
      </Container>
    </MainContainer>
  );
};
const Videos = props => {
  const { video, iconUser, nameUser, nameVideo, views } = props;
  return (
    <FooterContainerVideo>
      <video
        className="video"
        muted
        onMouseOver={event => event.target.play()}
        onMouseOut={event => event.target.pause()}
      >
        <source src={video} />
      </video>
      {/*<VideoAuthorImg image={iconUser} />*/}
      <NameUser>{nameUser}</NameUser>
      <NameVideo>{nameVideo}</NameVideo>
      <Views>{views}</Views>
    </FooterContainerVideo>
  );
};

const Category = props => {
  const { sideBarIcon: Icon, sideBarName } = props;
  return (
    <SideBarMenuContainer>
      <MenuIcon>{Icon && <Icon />}</MenuIcon>
      <MenuName>{sideBarName}</MenuName>
    </SideBarMenuContainer>
  );
};

const Menu = props => {
  const { sideBarIcon: Icon, sideBarName, active } = props;
  return (
    <SideBarMenuContainer>
      <MenuIcon active={active}>{Icon && <Icon />}</MenuIcon>
      <MenuName active={active}>{sideBarName}</MenuName>
    </SideBarMenuContainer>
  );
};

export default Skateboard;
