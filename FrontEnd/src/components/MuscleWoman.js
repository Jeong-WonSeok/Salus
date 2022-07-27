import styled from 'styled-components';

import background from '../assets/images/muscle/woman/00.png';
import traps_a from '../assets/images/muscle/woman/01.png';
import traps_b from '../assets/images/muscle/woman/02.png';
import shoulders_a from '../assets/images/muscle/woman/03.png';
import shoulders_b from '../assets/images/muscle/woman/04.png';
import pecs from '../assets/images/muscle/woman/05.png';
import biceps_a from '../assets/images/muscle/woman/06.png';
import biceps_b from '../assets/images/muscle/woman/07.png';
import forearm_a from '../assets/images/muscle/woman/08.png';
import forearm_b from '../assets/images/muscle/woman/09.png';
import obliques from '../assets/images/muscle/woman/10.png';
import quads_a from '../assets/images/muscle/woman/11.png';
import quads_b from '../assets/images/muscle/woman/12.png';
import calves_a from '../assets/images/muscle/woman/13.png';
import calves_b from '../assets/images/muscle/woman/14.png';
import back_traps_a from '../assets/images/muscle/woman/15.png';
import back_traps_b from '../assets/images/muscle/woman/16.png';
import back_shoulders_a from '../assets/images/muscle/woman/17.png';
import back_shoulders_b from '../assets/images/muscle/woman/18.png';
import triceps_a from '../assets/images/muscle/woman/19.png';
import triceps_b from '../assets/images/muscle/woman/20.png';
import back_lats_a from '../assets/images/muscle/woman/21.png';
import back_lats_b from '../assets/images/muscle/woman/22.png';
import back_lower from '../assets/images/muscle/woman/23.png';
import back_forearms_a from '../assets/images/muscle/woman/24.png';
import back_forearms_b from '../assets/images/muscle/woman/25.png';
import back_glutes from '../assets/images/muscle/woman/26.png';
import back_hamstrings_a from '../assets/images/muscle/woman/27.png';
import back_hamstrings_b from '../assets/images/muscle/woman/28.png';
import back_calves_a from '../assets/images/muscle/woman/29.png';
import back_calves_b from '../assets/images/muscle/woman/30.png';

const Musclemap = styled.div`
  position: relative;
  width: 100%;
`;

const Background = styled.img`
  width: 100%;
`;

const MuscleImg = styled.img`
  display: block;
  position: absolute;
  opacity: ${(props) => props.opacity};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  width: ${(props) => props.width};
`;

const MuscleWoman = (props) => {
  return (
    <Musclemap>
      <Background src={background} alt="background" />
      <MuscleImg
        src={traps_a}
        alt="traps_a"
        opacity={props.muscles.includes('traps') ? '1' : '0'}
        top="21.8%"
        left="25.8%"
        width="3%"
      />
      <MuscleImg
        src={traps_b}
        alt="traps_b"
        opacity={props.muscles.includes('traps') ? '1' : '0'}
        top="21.8%"
        left="30.57%"
        width="3%"
      />
      <MuscleImg
        src={shoulders_a}
        alt="shoulders_a"
        opacity={props.muscles.includes('shoulders') ? '1' : '0'}
        top="24.22%"
        left="22.1%"
        width="4.22%"
      />
      <MuscleImg
        src={shoulders_b}
        alt="shoulders_b"
        opacity={props.muscles.includes('shoulders') ? '1' : '0'}
        top="24.26%"
        left="33.21%"
        width="4.22%"
      />
      <MuscleImg
        src={pecs}
        alt="pecs"
        opacity={props.muscles.includes('pecs') ? '1' : '0'}
        top="25.37%"
        left="24.6%"
        width="10.4%"
      />
      <MuscleImg
        src={biceps_a}
        alt="biceps_a"
        opacity={props.muscles.includes('biceps') ? '1' : '0'}
        top="29.48%"
        left="21.47%"
        width="3.3%"
      />
      <MuscleImg
        src={biceps_b}
        alt="biceps_b"
        opacity={props.muscles.includes('biceps') ? '1' : '0'}
        top="29.48%"
        left="34.8%"
        width="3.3%"
      />
      <MuscleImg
        src={forearm_a}
        alt="forearm_a"
        opacity={props.muscles.includes('forearm') ? '1' : '0'}
        top="36.1%"
        left="18.42%"
        width="5%"
      />
      <MuscleImg
        src={forearm_b}
        alt="forearm_b"
        opacity={props.muscles.includes('forearm') ? '1' : '0'}
        top="36.1%"
        left="36.1%"
        width="5%"
      />
      <MuscleImg
        src={obliques}
        alt="obliques"
        opacity={props.muscles.includes('obliques') ? '1' : '0'}
        top="32.48%"
        left="26.99%"
        width="5.57%"
      />
      <MuscleImg
        src={quads_a}
        alt="quads_a"
        opacity={props.muscles.includes('quads') ? '1' : '0'}
        top="46.7%"
        left="23.7%"
        width="5.2%"
      />
      <MuscleImg
        src={quads_b}
        alt="quads_b"
        opacity={props.muscles.includes('quads') ? '1' : '0'}
        top="46.7%"
        left="30.5%"
        width="5.2%"
      />
      <MuscleImg
        src={calves_a}
        alt="calves_a"
        opacity={props.muscles.includes('calves') ? '1' : '0'}
        top="72%"
        left="23.1%"
        width="3.8%"
      />
      <MuscleImg
        src={calves_b}
        alt="calves_b"
        opacity={props.muscles.includes('calves') ? '1' : '0'}
        top="72%"
        left="32.58%"
        width="3.8%"
      />
      <MuscleImg
        src={back_traps_a}
        alt="back_traps_a"
        opacity={props.muscles.includes('traps') ? '1' : '0'}
        top="20.53%"
        left="66.36%"
        width="7.47%"
      />
      <MuscleImg
        src={back_traps_b}
        alt="back_traps_b"
        opacity={props.muscles.includes('traps') ? '1' : '0'}
        top="22.5%"
        left="65.97%"
        width="8.36%"
      />
      <MuscleImg
        src={back_shoulders_a}
        alt="back_shoulders_a"
        opacity={props.muscles.includes('shoulders') ? '1' : '0'}
        top="23.25%"
        left="61.9%"
        width="4.7%"
      />
      <MuscleImg
        src={back_shoulders_b}
        alt="back_shoulders_b"
        opacity={props.muscles.includes('shoulders') ? '1' : '0'}
        top="23.2%"
        left="73.66%"
        width="4.7%"
      />
      <MuscleImg
        src={triceps_a}
        alt="triceps_a"
        opacity={props.muscles.includes('triceps') ? '1' : '0'}
        top="28.6%"
        left="61.5%"
        width="3.2%"
      />
      <MuscleImg
        src={triceps_b}
        alt="triceps_b"
        opacity={props.muscles.includes('triceps') ? '1' : '0'}
        top="28.72%"
        left="75.52%"
        width="3.22%"
      />
      <MuscleImg
        src={back_lats_a}
        alt="back_lats_a"
        opacity={props.muscles.includes('lats') ? '1' : '0'}
        top="31%"
        left="65.3%"
        width="4.7%"
      />
      <MuscleImg
        src={back_lats_b}
        alt="back_lats_b"
        opacity={props.muscles.includes('lats') ? '1' : '0'}
        top="31%"
        left="70.2%"
        width="4.7%"
      />
      <MuscleImg
        src={back_lower}
        alt="back_lower"
        opacity={props.muscles.includes('lower') ? '1' : '0'}
        top="37.21%"
        left="67.09%"
        width="6.12%"
      />
      <MuscleImg
        src={back_forearms_a}
        alt="back_forearms_a"
        opacity={props.muscles.includes('forearms') ? '1' : '0'}
        top="37.55%"
        left="59.3%"
        width="3.9%"
      />
      <MuscleImg
        src={back_forearms_b}
        alt="back_forearms_b"
        opacity={props.muscles.includes('forearms') ? '1' : '0'}
        top="37.69%"
        left="76.96%"
        width="3.9%"
      />
      <MuscleImg
        src={back_glutes}
        alt="back_glutes"
        opacity={props.muscles.includes('glutes') ? '1' : '0'}
        top="45.5%"
        left="64.53%"
        width="11.2%"
      />
      <MuscleImg
        src={back_hamstrings_a}
        alt="back_hamstrings_a"
        opacity={props.muscles.includes('hamstrings') ? '1' : '0'}
        top="51.2%"
        left="63.79%"
        width="5.46%"
      />
      <MuscleImg
        src={back_hamstrings_b}
        alt="back_hamstrings_b"
        opacity={props.muscles.includes('hamstrings') ? '1' : '0'}
        top="51.2%"
        left="71%"
        width="5.46%"
      />
      <MuscleImg
        src={back_calves_a}
        alt="back_calves_a"
        opacity={props.muscles.includes('calves') ? '1' : '0'}
        top="68.6%"
        left="63.77%"
        width="4.12%"
      />
      <MuscleImg
        src={back_calves_b}
        alt="back_calves_b"
        opacity={props.muscles.includes('calves') ? '1' : '0'}
        top="68.6%"
        left="72.38%"
        width="4.12%"
      />
    </Musclemap>
  );
};

export default MuscleWoman;
