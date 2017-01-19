/**
 * Created by sravan on 18/01/17.
 */
import React from 'react';
import mixin from './defaultProps';

export default React.createClass({
    
    mixins: [mixin],
    render() {
        const {
            prefixCls, strokeWidth, trailWidth, strokeColor,
            trailColor, strokeLinecap, percent, style, className,
    restProps,
    } = this.props;

        const radius = (25 - strokeWidth / 2);
        const pathString = `M 50,50 m 0,-${radius}
     a ${radius},${radius} 0 1 1 0,${2 * radius}
     a ${radius},${radius} 0 1 1 0,-${2 * radius}`;
        const len = Math.PI * 2 * radius;
        const pathStyle = {
            strokeDasharray: `${len}px ${len}px`,
            strokeDashoffset: `${((100 - percent) / 100 * len)}px`,
            transition: 'stroke-dashoffset 5s ease 5s, stroke 20s ease 10s',
            WebkitTransition: 'stroke-dashoffset 15s ease-in-out',
            animation: 'dash 5s linear'

    };

        return (
            <svg
            width="300" height="75"
            viewBox="0 0 300 75"
            style={style}
            {...restProps}
            >
                <g>
                    <path

                        d={pathString}
                        stroke={trailColor}
                        strokeWidth={trailWidth || strokeWidth}
                        fillOpacity="0">
                    </path>
                    <path
                        d={pathString}
                        strokeLinecap={strokeLinecap}
                        stroke={strokeColor}
                        strokeWidth={strokeWidth}
                        fillOpacity="0"
                        ref={(path) => { this.path = path; }}
                        style={pathStyle}
                    />
                    <text x="45" y="55"  text-anchor="middle" stroke="#51c5cf" strokeWidth="0.1px" dy=".1em">{percent}</text>

                </g>
            </svg>
       );
    },
});
