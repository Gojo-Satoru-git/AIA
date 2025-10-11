import './Achievementcard.css';
const Achievementcard = ({ achievement, setdetail }) => {
  return (
    <div
      className={`card`}
      onClick={() => {
        setdetail(achievement);
      }}
    >
      <img
        className="image"
        src={achievement.image}
        alt={achievement.title}
        style={{
          color: 'white',
          padding: '2px',
          borderRadius: '20px',
          height: '90%',
          width: '100%',
          objectFit: 'cover',
          overflow: 'hidden',
        }}
      />
      <div
        className="content"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <h3 className="header" style={{ fontSize: '150%' }}>
          {achievement.title}
        </h3>
      </div>
    </div>
  );
};
export default Achievementcard;
