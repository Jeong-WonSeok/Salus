import MuscleMan from '../components/MuscleMan';
import MuscleWoman from '../components/MuscleWoman';

const MuscleTest = () => {
  const user = { isMale: false, muscles: ['traps', 'shoulders'] };

  return <div>{user.isMale ? <MuscleMan muscles={user.muscles} /> : <MuscleWoman muscles={user.muscles} />}</div>;
};

export default MuscleTest;
