import { Link } from 'react-router-dom';
import styled from 'styled-components';

import notice from '../../assets/images/nav&side/notice.png';
import profile from '../../assets/images/nav&side/profile.png';

const Div = styled.div`
  background: white;
  width: 100%;
  height: 8vh;
  border-bottom: #edeef4 solid 1.5px;
  position: sticky;
`;

const Logo = styled.div`
  width: 17vw;
  height: 8vh;
  border-right: #edeef4 solid 1.5px;
  font-size: 60px;
  font-weight: bold;
  line-height: 8vh;
  background: linear-gradient(284.21deg, #92a3fd -7.95%, #9dceff 138.55%);
  color: transparent;
  -webkit-background-clip: text;
`;

const LinkLogo = styled(Link)`
  text-decoration: none;
`;

const Nav = styled.div`
  width: 83vw;
  height: 8vh;
  left: 17vw;
`;

const Img = styled.img`
  width: 36px;
  height: 36px;
  margin-left: 24px;
  margin-right: 10px;
`;

const Notice = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const Dropdown = styled.div`
  &:hover {
    & .dropdown_content {
      display: block;
    }
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  display: none;
  background: white;
  width: 9vw;
  height: 15vh;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const DropdownLink = styled(Link)`
  line-height: 5vh;
  text-decoration: none;
  color: #443b46;
  font-size: 20px;
  font-weight: 500;
  &:hover {
    background: linear-gradient(284.21deg, #92a3fd -7.95%, #9dceff 138.55%);
    font-weight: 500;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const BottomStyle = styled.div`
  width: 100%;
  border-bottom: 1px solid #96989d;
  text-align: center;
`;

const NavBar = () => {
  return (
    <Div className="d-flex">
      <LinkLogo to="/main">
        <Logo className="d-flex justify-content-center">Salus</Logo>
      </LinkLogo>
      <Nav className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <Img src={notice} alt="notice" />
          <Notice>오늘은 헬스장 정기 휴일입니다.</Notice>
        </div>
        <Dropdown>
          <div className="d-flex align-items-center">
            <Img src={profile} />
            <Notice className="me-3">username님</Notice>
          </div>
          <DropdownContent className="dropdown_content">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <Img src={profile} />
              <Notice className="me-3">username</Notice>
              <BottomStyle>
                <DropdownLink to="/profile">MY PROFILE</DropdownLink>
              </BottomStyle>
              <DropdownLink to="/logout">LOGOUT</DropdownLink>
            </div>
          </DropdownContent>
        </Dropdown>
      </Nav>
    </Div>
  );
};

export default NavBar;
