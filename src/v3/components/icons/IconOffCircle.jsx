import PropTypes from 'prop-types';
import { SvgIcon } from '@mui/material';

const IconOffCircle = ({ color = '#222222', width = 24, height = 24, sx = {} }) => {
  width = width.toString();
  height = height.toString();

  return (
    <SvgIcon id="organized-icon-off-circle" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <g clipPath="url(#clip0_4449_151635)">
          <path
            d="M0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_4449_151635">
            <rect width="14" height="14" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};

IconOffCircle.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  sx: PropTypes.object,
};

export default IconOffCircle;
