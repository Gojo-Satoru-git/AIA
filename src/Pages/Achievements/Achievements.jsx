import './Achievements.css';
import Achievementcard from '../../Components/Achievementcard/Achievementcard';
import AchievementData from '../../server/data/Achievements.json';
import { useState } from 'react';
const Achievements = () => {
  const [detail, setdetail] = useState(null);

  console.log(detail);
  return (
    <>
      <div className="achievements-grid">
        {AchievementData.map((achievement, i) => (
          <Achievementcard
            key={i}
            achievement={achievement}
            setdetail={setdetail}
          />
        ))}
      </div>

      {detail && (
        <div className="grid">
          <button
            onClick={() => {
              setdetail(null);
            }}
            className="CloseButton"
            style={{ color: 'black', fontSize: '170%' }}
          >
            X
          </button>
          <div className="DetailedView">
            <img
              src={detail.image}
              alt={detail.title}
              style={{ borderRadius: '20px' }}
            />
            <h1>{detail.title}</h1>
            <p>{detail.description}</p>
          </div>
        </div>
      )}
    </>
  );
};
export default Achievements;
