import MuscleMan from '../components/MuscleMan';
import MuscleWoman from '../components/MuscleWoman';
import Exercise from '../components/Kiosk/Exercise';

// import useHttp from '../customHooks/useHttp';

const MuscleTest = () => {
  const user = { isMale: false, muscles: ['traps', 'shoulders'] };
  const exercise = [
    { title: '숄더프레스1', volume: '1000', reps: '125' },
    { title: '레그프레스1', volume: '500', reps: '200' },
    { title: '숄더프레스2', volume: '1000', reps: '125' },
    { title: '레그프레스2', volume: '500', reps: '200' },
    { title: '숄더프레스3', volume: '1000', reps: '125' },
    { title: '레그프레스3', volume: '500', reps: '200' },
    { title: '숄더프레스4', volume: '1000', reps: '125' },
    { title: '레그프레스4', volume: '500', reps: '200' },
  ];

  return (
    <div>
      {user.isMale ? <MuscleMan muscles={user.muscles} /> : <MuscleWoman muscles={user.muscles} />}
      <Exercise exerciseList={exercise} />
    </div>
  );
};

export default MuscleTest;
