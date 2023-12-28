import PropTypes from 'prop-types';
import { SvgIcon } from '@mui/material';

const IconCloudDone = ({ color = '#222222', width = 24, height = 24, sx = {} }) => {
  width = width.toString();
  height = height.toString();

  return (
    <SvgIcon id="organized-icon-cloud_done" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2621_40479"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2621_40479)">
          <path
            d="M10.35 16.6538L15.6538 11.35L14.5692 10.2654L10.3346 14.5L8.21535 12.3808L7.14615 13.45L10.35 16.6538ZM6.49998 19.5C5.11794 19.5 3.9391 19.0198 2.96345 18.0596C1.98782 17.0993 1.5 15.9282 1.5 14.5461C1.5 13.3231 1.89167 12.2352 2.675 11.2827C3.45833 10.3301 4.45769 9.76667 5.67308 9.59232C5.99359 8.09744 6.74519 6.875 7.92788 5.925C9.11056 4.975 10.4679 4.5 12 4.5C13.8089 4.5 15.3445 5.13109 16.6067 6.39328C17.8689 7.65544 18.5 9.19101 18.5 11V11.5H18.8077C19.8615 11.5821 20.7403 12.0058 21.4442 12.7712C22.148 13.5365 22.5 14.4461 22.5 15.5C22.5 16.6153 22.1121 17.5609 21.3365 18.3365C20.5609 19.1121 19.6153 19.5 18.5 19.5H6.49998ZM6.49998 18H18.5C19.2 18 19.7916 17.7583 20.275 17.275C20.7583 16.7916 21 16.2 21 15.5C21 14.8 20.7583 14.2083 20.275 13.725C19.7916 13.2416 19.2 13 18.5 13H17V11C17 9.61664 16.5125 8.43748 15.5375 7.46248C14.5625 6.48748 13.3833 5.99998 12 5.99998C10.6166 5.99998 9.43748 6.48748 8.46248 7.46248C7.48748 8.43748 6.99998 9.61664 6.99998 11H6.49998C5.53331 11 4.70831 11.3416 4.02498 12.025C3.34164 12.7083 2.99998 13.5333 2.99998 14.5C2.99998 15.4666 3.34164 16.2916 4.02498 16.975C4.70831 17.6583 5.53331 18 6.49998 18Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

IconCloudDone.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  sx: PropTypes.object,
};

export default IconCloudDone;
