import './Achievementcard.css';
const Achievementcard = ({ achievement, setdetail }) => {
  return (
    <div
      className={`card`}
      onClick={() => {
        setdetail(achievement);
      }}
      style={{
        height: '90%',
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
          gap: '10px',
          padding: '5px',
        }}
      >
        <h3 className="header" style={{ color: 'black' }}>
          {achievement.title}
        </h3>
        <h4
          style={{
            color: 'gray',
            font: 'initial',
            fontSize: '1rem',
          }}
        >
          {achievement.description}
        </h4>
      </div>
    </div>
  );
};
export default Achievementcard;
