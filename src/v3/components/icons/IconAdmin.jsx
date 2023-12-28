import PropTypes from 'prop-types';
import { SvgIcon } from '@mui/material';

const IconAdmin = ({ color = '#222222', width = 24, height = 24, sx = {} }) => {
  width = width.toString();
  height = height.toString();

  return (
    <SvgIcon id="organized-icon-admin" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_3109_69418"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_3109_69418)">
          <path
            d="M12 12.7499C11.0872 12.7499 10.3173 12.4365 9.69037 11.8096C9.06346 11.1826 8.75 10.4128 8.75 9.49995C8.75 8.58714 9.06346 7.81727 9.69037 7.19035C10.3173 6.56344 11.0872 6.24998 12 6.24998C12.9128 6.24998 13.6827 6.56344 14.3096 7.19035C14.9365 7.81727 15.25 8.58714 15.25 9.49995C15.25 10.4128 14.9365 11.1826 14.3096 11.8096C13.6827 12.4365 12.9128 12.7499 12 12.7499ZM12 11.25C12.4974 11.25 12.9134 11.0827 13.2481 10.7481C13.5827 10.4134 13.75 9.99739 13.75 9.49995C13.75 9.00252 13.5827 8.58649 13.2481 8.25185C12.9134 7.91724 12.4974 7.74993 12 7.74993C11.5025 7.74993 11.0865 7.91724 10.7519 8.25185C10.4173 8.58649 10.2499 9.00252 10.2499 9.49995C10.2499 9.99739 10.4173 10.4134 10.7519 10.7481C11.0865 11.0827 11.5025 11.25 12 11.25ZM12 21.4807C9.83716 20.8909 8.04646 19.6179 6.62787 17.6615C5.20929 15.7051 4.5 13.5179 4.5 11.1V5.34613L12 2.53845L19.5 5.34613V11.1C19.5 13.5179 18.7907 15.7051 17.3721 17.6615C15.9535 19.6179 14.1628 20.8909 12 21.4807ZM12 4.13458L5.99997 6.37495V11.1C5.99997 12.0512 6.13619 12.9711 6.40863 13.8596C6.68108 14.748 7.05961 15.5769 7.54422 16.3461C8.21857 16.0025 8.92466 15.7339 9.66248 15.5404C10.4003 15.3468 11.1795 15.25 12 15.25C12.8205 15.25 13.5997 15.3468 14.3375 15.5404C15.0753 15.7339 15.7814 16.0025 16.4557 16.3461C16.9403 15.5769 17.3189 14.748 17.5913 13.8596C17.8638 12.9711 18 12.0512 18 11.1V6.37495L12 4.13458ZM12 16.7499C11.3551 16.7499 10.7349 16.8198 10.1394 16.9596C9.54388 17.0993 8.98137 17.2955 8.45187 17.548C8.94804 18.0993 9.49388 18.5759 10.0894 18.9778C10.6849 19.3798 11.3218 19.6871 12 19.9C12.6782 19.6871 13.3134 19.3798 13.9058 18.9778C14.4981 18.5759 15.0423 18.0993 15.5385 17.548C15.009 17.2955 14.4481 17.0993 13.8558 16.9596C13.2634 16.8198 12.6449 16.7499 12 16.7499Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

IconAdmin.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  sx: PropTypes.object,
};

export default IconAdmin;
