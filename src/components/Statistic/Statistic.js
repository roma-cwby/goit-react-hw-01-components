import propTypes from 'prop-types';
import { StatisticSection } from './Statistic.styled';
import { getRandomHexColor } from 'utils/randomHexColor';

export const Statistic = ({ title, data }) => {
  return (
    <StatisticSection>
      {title && <h2>{title}</h2>}

      <ul>
        {data.map(item => (
          <li key={item.id} style={{ backgroundColor: getRandomHexColor() }}>
            <span>{item.label}</span>
            <span>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </StatisticSection>
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
