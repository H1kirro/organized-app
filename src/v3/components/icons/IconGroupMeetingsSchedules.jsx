import PropTypes from 'prop-types';
import { SvgIcon } from '@mui/material';

const IconGroupMeetingsSchedules = ({ color = '#222222', width = 24, height = 24, sx = {} }) => {
  width = width.toString();
  height = height.toString();

  return (
    <SvgIcon id="organized-icon-group-meetings-schedules" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_3258_161975"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_3258_161975)">
          <path
            d="M4.99997 8.80774H19V6.30772C19 6.23079 18.9679 6.16026 18.9038 6.09614C18.8397 6.03204 18.7692 5.99999 18.6922 5.99999H5.3077C5.23077 5.99999 5.16024 6.03204 5.09612 6.09614C5.03202 6.16026 4.99997 6.23079 4.99997 6.30772V8.80774ZM5.3077 21.5C4.80257 21.5 4.375 21.325 4.025 20.975C3.675 20.625 3.5 20.1974 3.5 19.6923V6.30772C3.5 5.80259 3.675 5.37502 4.025 5.02502C4.375 4.67502 4.80257 4.50002 5.3077 4.50002H6.69232V2.38464H8.23075V4.50002H15.8077V2.38464H17.3076V4.50002H18.6922C19.1974 4.50002 19.625 4.67502 19.975 5.02502C20.325 5.37502 20.5 5.80259 20.5 6.30772V11.7711C20.2602 11.666 20.0153 11.5811 19.7654 11.5163C19.5154 11.4516 19.2602 11.4007 19 11.3635V10.3077H4.99997V19.6923C4.99997 19.7692 5.03202 19.8397 5.09612 19.9038C5.16024 19.9679 5.23077 20 5.3077 20H11.8096C11.8942 20.2769 11.9965 20.5388 12.1164 20.7855C12.2362 21.0323 12.3724 21.2705 12.525 21.5H5.3077ZM18.1923 22.5C16.9436 22.5 15.8814 22.0622 15.0058 21.1865C14.1301 20.3109 13.6923 19.2487 13.6923 18C13.6923 16.7513 14.1301 15.6891 15.0058 14.8135C15.8814 13.9378 16.9436 13.5 18.1923 13.5C19.441 13.5 20.5032 13.9378 21.3788 14.8135C22.2544 15.6891 22.6922 16.7513 22.6922 18C22.6922 19.2487 22.2544 20.3109 21.3788 21.1865C20.5032 22.0622 19.441 22.5 18.1923 22.5ZM19.8577 20.2884L20.4807 19.6654L18.6346 17.8192V15.0577H17.75V18.1808L19.8577 20.2884Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

IconGroupMeetingsSchedules.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  sx: PropTypes.object,
};

export default IconGroupMeetingsSchedules;
