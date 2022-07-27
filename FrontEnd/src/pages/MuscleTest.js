import MuscleMan from '../components/MuscleMan';
import MuscleWoman from '../components/MuscleWoman';
import ExerciseList from '../components/Kiosk/ExerciseList';

const MuscleTest = () => {
  const user = { isMale: false, muscles: ['traps', 'shoulders'] };

  return (
    <div>
      {user.isMale ? <MuscleMan muscles={user.muscles} /> : <MuscleWoman muscles={user.muscles} />}
      <ExerciseList title="숄더프레스" volume="1000" reps="512" />
    </div>
  );
};

export default MuscleTest;
