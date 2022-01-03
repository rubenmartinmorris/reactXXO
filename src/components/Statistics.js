import './Statistics.css';
export const Statistics = ({ stuff }) => {
  const list = Object.entries(stuff[0]).map(([key, value]) => {
    if (key === 'name') {
      return <h1>{value}</h1>;
    } else {
      return (
        <div>
          {key} : {value.toString()}
        </div>
      );
    }
  });

  return <div class='statistics'>{list}</div>;
};
