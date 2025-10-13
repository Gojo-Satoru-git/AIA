import './Achievementcard.css';
const Achievementcard = ({ image, title, content, detail, setdetail }) => {
  return (
    <div
      className={`card${detail ? ' inactive' : ''}`}
      onClick={setdetail(!detail)}
    >
      <img
        className="image"
        src={image}
        alt={title}
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
        <h3 className="header" style={{ fontSize: '25px' }}>
          {title}
        </h3>
        <p
          className="content"
          style={{ color: 'lightgray', opacity: '0.6', padding: '5px' }}
        >
          {content}
        </p>
      </div>
    </div>
  );
};
export default Achievementcard;
