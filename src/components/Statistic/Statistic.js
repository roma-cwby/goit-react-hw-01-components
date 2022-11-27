import propTypes from 'prop-types';

export const Statistic = ({ title, data }) => {
  return (
    <section>
      <h2>{title}</h2>

      <ul>
        {data.map(item => (
          <li key={item.id}>
            <span>{item.label}</span>
            <span>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistic.propTypes = {
  title: propTypes.string.isRequired,
  data: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    })
  ).isRequired,
};
