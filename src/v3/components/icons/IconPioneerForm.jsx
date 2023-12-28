import PropTypes from 'prop-types';
import { SvgIcon } from '@mui/material';

const IconPioneerForm = ({ color = '#222222', width = 24, height = 24, sx = {} }) => {
  width = width.toString();
  height = height.toString();

  return (
    <SvgIcon id="organized-icon-pioneer-form" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2651_27808"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2651_27808)">
          <path d="M8 16.7216V15.3706H13.5087V16.7216H8ZM8 13.351V12H16.6468V13.351H8Z" fill={color} />
          <path
            d="M13.8269 21.5V18.8577L19.2557 13.4538C19.3801 13.3359 19.5143 13.25 19.6585 13.1961C19.8026 13.1423 19.9468 13.1154 20.091 13.1154C20.2482 13.1154 20.4003 13.1449 20.5473 13.2038C20.6942 13.2628 20.8278 13.3513 20.948 13.4692L21.873 14.4038C21.9807 14.5282 22.064 14.6628 22.123 14.8077C22.182 14.9525 22.2115 15.0974 22.2115 15.2423C22.2115 15.3871 22.1845 15.5346 22.1307 15.6846C22.0769 15.8346 21.991 15.9718 21.873 16.0961L16.4692 21.5H13.8269ZM15.0192 20.3077H15.9692L19.2154 17.0461L18.7654 16.5612L18.2904 16.1019L15.0192 19.3577V20.3077ZM6.3077 21.5C5.80257 21.5 5.375 21.325 5.025 20.975C4.675 20.625 4.5 20.1974 4.5 19.6923V4.3077C4.5 3.80257 4.675 3.375 5.025 3.025C5.375 2.675 5.80257 2.5 6.3077 2.5H14.25L19.5 7.74995V10.548H18V8.49995H13.5V3.99998H6.3077C6.23077 3.99998 6.16024 4.03203 6.09612 4.09613C6.03202 4.16024 5.99997 4.23077 5.99997 4.3077V19.6923C5.99997 19.7692 6.03202 19.8397 6.09612 19.9038C6.16024 19.9679 6.23077 20 6.3077 20H11.6346V21.5H6.3077ZM18.7654 16.5612L18.2904 16.1019L19.2154 17.0461L18.7654 16.5612Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

IconPioneerForm.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  sx: PropTypes.object,
};

export default IconPioneerForm;
