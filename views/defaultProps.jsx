/**
 * Created by sravan on 18/01/17.
 */
import { PropTypes } from 'react';

export default {
    propTypes: {
        prefixCls: PropTypes.string,
        strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        strokeColor: PropTypes.string,
        trailWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        trailColor: PropTypes.string,
        strokeLinecap: PropTypes.oneOf(['round', 'square']),
        style: PropTypes.object,
        className: PropTypes.string,
    },
    getDefaultProps() {
        return {
            prefixCls: 'rc-progress',
            strokeWidth: 1,
            strokeColor: '#2db7f5',
            trailWidth: 1,
            trailColor: '#D9D9D9',
            strokeLinecap: 'round',
            className: '',
        };
    },
    componentDidUpdate() {
        const now = Date.now();
        this.path.style.transitionDuration = '0.50s, 0.50s';
        if (this.prevTimeStamp && now - this.prevTimeStamp < 100) {
            this.path.style.transitionDuration = '0s, 0s';
        }
        this.prevTimeStamp = Date.now();
    },
};
