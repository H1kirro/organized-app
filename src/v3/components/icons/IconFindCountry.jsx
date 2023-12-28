import PropTypes from 'prop-types';
import { SvgIcon } from '@mui/material';

const IconFindCountry = ({ color = '#222222', width = 24, height = 24, sx = {} }) => {
  width = width.toString();
  height = height.toString();

  return (
    <SvgIcon id="organized-icon-find-country" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2685_33500"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2685_33500)">
          <path
            d="M12.0016 21.5C10.6877 21.5 9.45268 21.2506 8.29655 20.752C7.1404 20.2533 6.13472 19.5765 5.2795 18.7217C4.42427 17.8669 3.74721 16.8616 3.24833 15.706C2.74944 14.5504 2.5 13.3156 2.5 12.0017C2.5 10.6877 2.74933 9.45268 3.248 8.29655C3.74667 7.1404 4.42342 6.13472 5.27825 5.2795C6.1331 4.42427 7.13834 3.74721 8.29398 3.24833C9.44959 2.74944 10.6844 2.5 11.9983 2.5C13.3122 2.5 14.5473 2.74933 15.7034 3.248C16.8596 3.74667 17.8652 4.42342 18.7205 5.27825C19.5757 6.1331 20.2527 7.13834 20.7516 8.29398C21.2505 9.44959 21.5 10.6844 21.5 11.9983C21.5 13.3122 21.2506 14.5473 20.752 15.7034C20.2533 16.8596 19.5765 17.8652 18.7217 18.7205C17.8669 19.5757 16.8616 20.2527 15.706 20.7516C14.5504 21.2505 13.3156 21.5 12.0016 21.5ZM11 19.95V18C10.45 18 9.97914 17.8041 9.58748 17.4125C9.19581 17.0208 8.99998 16.55 8.99998 16V15L4.19998 10.2C4.14998 10.5 4.10414 10.8 4.06248 11.1C4.02081 11.4 3.99998 11.7 3.99998 12C3.99998 14.0166 4.66248 15.7833 5.98748 17.3C7.31248 18.8166 8.98331 19.7 11 19.95ZM17.9 17.4C18.2333 17.0333 18.5333 16.6375 18.8 16.2125C19.0666 15.7875 19.2875 15.3458 19.4625 14.8875C19.6375 14.4291 19.7708 13.9583 19.8625 13.475C19.9541 12.9916 20 12.5 20 12C20 10.3618 19.5474 8.86573 18.6423 7.51173C17.7372 6.15774 16.5231 5.18075 15 4.58075V4.99998C15 5.54998 14.8041 6.02081 14.4125 6.41248C14.0208 6.80414 13.55 6.99998 13 6.99998H11V8.99998C11 9.28331 10.9041 9.52081 10.7125 9.71248C10.5208 9.90414 10.2833 9.99998 9.99998 9.99998H7.99998V12H14C14.2833 12 14.5208 12.0958 14.7125 12.2875C14.9041 12.4791 15 12.7166 15 13V16H16C16.4333 16 16.825 16.1291 17.175 16.3875C17.525 16.6458 17.7666 16.9833 17.9 17.4Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

IconFindCountry.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  sx: PropTypes.object,
};

export default IconFindCountry;
