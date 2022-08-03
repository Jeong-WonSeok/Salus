import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

import main from '../../assets/images/nav&side/main.png';
import note from '../../assets/images/nav&side/note.png';
import calendar from '../../assets/images/nav&side/calendar.png';
import fitness from '../../assets/images/nav&side/gym.png';

const Div = styled.div`
  background: white;
  width: 17vw;
  height: 100%
  border-right: #edeef4 solid 1.5px;
  position: sticky;
`;

const Ul = styled.ul`
  margin-top: 16vh;
`;

const NavStyle = styled(NavLink)`
  width: 100%;
  height: 7vh;
  margin: 3vh 0;
  padding-left: 3vw;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  line-height: 5vh;
  color: #443b46;
  transition: 0.3s ease;
  & .menuImg {
    filter: none;
  }
  &.active {
    background: #f8f9fd;
    border-left: #2e52ff 4px solid;
    span {
      background: linear-gradient(284.21deg, #2e52ff -7.95%, #8da1ff 138.55%);
      color: transparent;
      -webkit-background-clip: text;
    }
    & .menuImg {
      -webkit-filter: invert(59%) sepia(61%) saturate(771%) hue-rotate(197deg) brightness(100%) contrast(101%);
      filter: invert(59%) sepia(61%) saturate(771%) hue-rotate(197deg) brightness(100%) contrast(101%);
    }
  }
`;

const Img = styled.img`
  width: 32px;
  height: 32px;
`;

const SideBar = () => {
  return (
    <Div>
      <Ul>
        <li>
          <NavStyle to="/main" className="d-flex align-items-center">
            <Img src={main} className="menuImg me-1" />
            <span>메인페이지</span>
          </NavStyle>
        </li>
        <li>
          <NavStyle to="/1" className="d-flex align-items-center">
            <Img src={note} className="menuImg me-1" />
            <span>운동기록</span>
          </NavStyle>
        </li>
        <li>
          <NavStyle to="/calendar" className="d-flex align-items-center">
            <Img src={calendar} className="menuImg me-1" />
            <span>캘린더</span>
          </NavStyle>
        </li>
        <li>
          <NavStyle to="/1" className="d-flex align-items-center">
            <Img src={fitness} className="menuImg me-1" />
            <span>전체 운동 기구</span>
          </NavStyle>
        </li>
      </Ul>
    </Div>
  );
};

export default SideBar;
