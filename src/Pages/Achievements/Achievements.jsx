import './Achievements.css';
import Achievementcard from '../../Components/Achievementcard/Achievementcard';
import AchievementData from '../../server/data/Achievements.json';
import { useState } from 'react';
const Achievements = () => {
  const [detail, setdetail] = useState(false);

  console.log(detail);
  return (
    <>
      <div className="achievements-grid">
        {AchievementData.map((achievement, i) => (
          <Achievementcard
            key={i}
            image={achievement.image}
            title={achievement.title}
            content={achievement.description}
            detail={detail}
            setdetail={setdetail}
          />
        ))}
      </div>
    </>
  );
};
export default Achievements;
