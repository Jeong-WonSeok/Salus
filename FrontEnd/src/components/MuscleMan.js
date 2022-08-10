import styled from 'styled-components';

import background from '../assets/images/muscle/man/00.png';
import traps_a from '../assets/images/muscle/man/01.png';
import traps_b from '../assets/images/muscle/man/02.png';
import shoulders_a from '../assets/images/muscle/man/03.png';
import shoulders_b from '../assets/images/muscle/man/04.png';
import pecs from '../assets/images/muscle/man/05.png';
import biceps_a from '../assets/images/muscle/man/06.png';
import biceps_b from '../assets/images/muscle/man/07.png';
import forearm_a from '../assets/images/muscle/man/08.png';
import forearm_b from '../assets/images/muscle/man/09.png';
import obliques from '../assets/images/muscle/man/10.png';
import quads_a from '../assets/images/muscle/man/11.png';
import quads_b from '../assets/images/muscle/man/12.png';
import calves_a from '../assets/images/muscle/man/13.png';
import calves_b from '../assets/images/muscle/man/14.png';
import back_traps_a from '../assets/images/muscle/man/15.png';
import back_traps_b from '../assets/images/muscle/man/16.png';
import back_shoulders_a from '../assets/images/muscle/man/17.png';
import back_shoulders_b from '../assets/images/muscle/man/18.png';
import triceps_a from '../assets/images/muscle/man/19.png';
import triceps_b from '../assets/images/muscle/man/20.png';
import back_lats_a from '../assets/images/muscle/man/21.png';
import back_lats_b from '../assets/images/muscle/man/22.png';
import back_lower from '../assets/images/muscle/man/23.png';
import back_forearms_a from '../assets/images/muscle/man/24.png';
import back_forearms_b from '../assets/images/muscle/man/25.png';
import back_glutes from '../assets/images/muscle/man/26.png';
import back_hamstrings_a from '../assets/images/muscle/man/27.png';
import back_hamstrings_b from '../assets/images/muscle/man/28.png';
import back_calves_a from '../assets/images/muscle/man/29.png';
import back_calves_b from '../assets/images/muscle/man/30.png';

const Musclemap = styled.div`
  position: relative;
  left: -1vw;
  top: 3vh;
  width: 88vw;
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
  transition: 0.25s ease-in;
`;

const MuscleMan = (props) => {
  if (!props.muscles) {
    return (
      <Musclemap>
        <Background src={background} alt="background" />
      </Musclemap>
    );
  }
  return (
    <Musclemap>
      <Background src={background} alt="background" />
      <MuscleImg
        src={traps_a}
        alt="traps_a"
        opacity={props.muscles.includes('traps') ? '1' : '0'}
        top="17.4%"
        left="26.7%"
        width="3.39%"
      />
      <MuscleImg
        src={traps_b}
        alt="traps_b"
        opacity={props.muscles.includes('traps') ? '1' : '0'}
        top="17.4%"
        left="31.48%"
        width="3.39%"
      />
      <MuscleImg
        src={shoulders_a}
        alt="shoulders_a"
        opacity={props.muscles.includes('shoulders') ? '1' : '0'}
        top="21.1%"
        left="21.84%"
        width="5.61%"
      />
      <MuscleImg
        src={shoulders_b}
        alt="shoulders_b"
        opacity={props.muscles.includes('shoulders') ? '1' : '0'}
        top="21.1%"
        left="34.1%"
        width="5.61%"
      />
      <MuscleImg
        src={pecs}
        alt="pecs"
        opacity={props.muscles.includes('pecs') ? '1' : '0'}
        top="22%"
        left="24.3%"
        width="13%"
      />
      <MuscleImg
        src={biceps_a}
        alt="biceps_a"
        opacity={props.muscles.includes('biceps') ? '1' : '0'}
        top="26.9%"
        left="20.89%"
        width="4.05%"
      />
      <MuscleImg
        src={biceps_b}
        alt="biceps_b"
        opacity={props.muscles.includes('biceps') ? '1' : '0'}
        top="26.9%"
        left="36.67%"
        width="4.05%"
      />
      <MuscleImg
        src={forearm_a}
        alt="forearm_a"
        opacity={props.muscles.includes('forearm') ? '1' : '0'}
        top="33.6%"
        left="16.75%"
        width="6.62%"
      />
      <MuscleImg
        src={forearm_b}
        alt="forearm_b"
        opacity={props.muscles.includes('forearm') ? '1' : '0'}
        top="33.6%"
        left="38.18%"
        width="6.61%"
      />
      <MuscleImg
        src={obliques}
        alt="obliques"
        opacity={props.muscles.includes('obliques') ? '1' : '0'}
        top="28.67%"
        left="27.44%"
        width="6.42%"
      />
      <MuscleImg
        src={quads_a}
        alt="quads_a"
        opacity={props.muscles.includes('quads') ? '1' : '0'}
        top="42.2%"
        left="23.6%"
        width="6.55%"
      />
      <MuscleImg
        src={quads_b}
        alt="quads_b"
        opacity={props.muscles.includes('quads') ? '1' : '0'}
        top="42.2%"
        left="31.4%"
        width="6.55%"
      />
      <MuscleImg
        src={calves_a}
        alt="calves_a"
        opacity={props.muscles.includes('calves') ? '1' : '0'}
        top="64.59%"
        left="23.19%"
        width="4.67%"
      />
      <MuscleImg
        src={calves_b}
        alt="calves_b"
        opacity={props.muscles.includes('calves') ? '1' : '0'}
        top="64.59%"
        left="33.74%"
        width="4.67%"
      />
      <MuscleImg
        src={back_traps_a}
        alt="back_traps_a"
        opacity={props.muscles.includes('traps') ? '1' : '0'}
        top="15.38%"
        left="67.3%"
        width="7%"
      />
      <MuscleImg
        src={back_traps_b}
        alt="back_traps_b"
        opacity={props.muscles.includes('traps') ? '1' : '0'}
        top="17.82%"
        left="66.87%"
        width="8.1%"
      />
      <MuscleImg
        src={back_shoulders_a}
        alt="back_shoulders_a"
        opacity={props.muscles.includes('shoulders') ? '1' : '0'}
        top="19.29%"
        left="61.54%"
        width="5.7%"
      />
      <MuscleImg
        src={back_shoulders_b}
        alt="back_shoulders_b"
        opacity={props.muscles.includes('shoulders') ? '1' : '0'}
        top="19.29%"
        left="74.6%"
        width="5.7%"
      />
      <MuscleImg
        src={triceps_a}
        alt="triceps_a"
        opacity={props.muscles.includes('triceps') ? '1' : '0'}
        top="24.83%"
        left="60.2%"
        width="4.58%"
      />
      <MuscleImg
        src={triceps_b}
        alt="triceps_b"
        opacity={props.muscles.includes('triceps') ? '1' : '0'}
        top="24.83%"
        left="77.1%"
        width="4.58%"
      />
      <MuscleImg
        src={back_lats_a}
        alt="back_lats_a"
        opacity={props.muscles.includes('lats') ? '1' : '0'}
        top="26.66%"
        left="64.7%"
        width="6%"
      />
      <MuscleImg
        src={back_lats_b}
        alt="back_lats_b"
        opacity={props.muscles.includes('lats') ? '1' : '0'}
        top="26.66%"
        left="71.2%"
        width="6%"
      />
      <MuscleImg
        src={back_lower}
        alt="back_lower"
        opacity={props.muscles.includes('lower') ? '1' : '0'}
        top="32.86%"
        left="67.62%"
        width="6.59%"
      />
      <MuscleImg
        src={back_forearms_a}
        alt="back_forearms_a"
        opacity={props.muscles.includes('forearms') ? '1' : '0'}
        top="33.5%"
        left="56.1%"
        width="6.36%"
      />
      <MuscleImg
        src={back_forearms_b}
        alt="back_forearms_b"
        opacity={props.muscles.includes('forearms') ? '1' : '0'}
        top="33.5%"
        left="79.35%"
        width="6.36%"
      />
      <MuscleImg
        src={back_glutes}
        alt="back_glutes"
        opacity={props.muscles.includes('glutes') ? '1' : '0'}
        top="41%"
        left="64.89%"
        width="12.08%"
      />
      <MuscleImg
        src={back_hamstrings_a}
        alt="back_hamstrings_a"
        opacity={props.muscles.includes('hamstrings') ? '1' : '0'}
        top="47.49%"
        left="63.75%"
        width="6.67%"
      />
      <MuscleImg
        src={back_hamstrings_b}
        alt="back_hamstrings_b"
        opacity={props.muscles.includes('hamstrings') ? '1' : '0'}
        top="47.49%"
        left="71.47%"
        width="6.7%"
      />
      <MuscleImg
        src={back_calves_a}
        alt="back_calves_a"
        opacity={props.muscles.includes('calves') ? '1' : '0'}
        top="64.43%"
        left="61.94%"
        width="4.8%"
      />
      <MuscleImg
        src={back_calves_b}
        alt="back_calves_b"
        opacity={props.muscles.includes('calves') ? '1' : '0'}
        top="64.43%"
        left="75.1%"
        width="4.8%"
      />
    </Musclemap>
  );
};

export default MuscleMan;
