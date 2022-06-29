import PropTypes from "prop-types";
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
        {options.map(options => {
            return (
                <button
                    type="button"
                    key={options}
                    className={s.btn}
                    onClick={() => onLeaveFeedback(options)}>
                    {options}
                </button>
            );
        })}
        </div>
   )    
};
 
FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };
  export default FeedbackOptions;
    


