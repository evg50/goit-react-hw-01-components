import PropTypes from 'prop-types';
const TitleH2 = ({ title }) => {
    if (title) {return (<h2 className="title">{title}</h2>)}
  
  return <div></div>
}
    TitleH2.propTypes = {
        title: PropTypes.string,
};
export default TitleH2;
