import PropTypes from 'prop-types';
import { SvgIcon } from '@mui/material';

const IconLanguageCourse = ({ color = '#222222', width = 24, height = 24, sx = {} }) => {
  width = width.toString();
  height = height.toString();

  return (
    <SvgIcon id="organized-icon-language-course" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2799_54677"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2799_54677)">
          <path
            d="M4.19227 14.1577H5.14418L5.70958 12.5654H8.4442L9.02495 14.1577H9.9711L7.6038 7.86158H6.54995L4.19227 14.1577ZM6.01533 11.7366L7.05188 8.86926H7.10187L8.13842 11.7366H6.01533ZM13.9423 9.74619V8.43081C14.4858 8.17826 15.0547 7.98884 15.649 7.86256C16.2432 7.73628 16.8602 7.67314 17.4999 7.67314C17.9012 7.67314 18.291 7.70166 18.6692 7.75871C19.0474 7.81576 19.4269 7.89108 19.8076 7.98466V9.23849C19.4333 9.10772 19.0612 9.01284 18.6913 8.95386C18.3214 8.89489 17.9243 8.86541 17.4999 8.86541C16.8602 8.86541 16.2406 8.94137 15.6413 9.09328C15.0419 9.24522 14.4756 9.46285 13.9423 9.74619ZM13.9423 15.2269V13.8924C14.473 13.6398 15.0403 13.4504 15.6442 13.3241C16.248 13.1978 16.8666 13.1347 17.4999 13.1347C17.9012 13.1347 18.291 13.1632 18.6692 13.2202C19.0474 13.2773 19.4269 13.3526 19.8076 13.4462V14.7C19.4333 14.5692 19.0612 14.4744 18.6913 14.4154C18.3214 14.3564 17.9243 14.3269 17.4999 14.3269C16.8602 14.3269 16.2406 14.4035 15.6413 14.5568C15.0419 14.71 14.4756 14.9334 13.9423 15.2269ZM13.9423 12.4962V11.1616C14.4858 10.909 15.0547 10.7196 15.649 10.5933C16.2432 10.467 16.8602 10.4039 17.4999 10.4039C17.9012 10.4039 18.291 10.4324 18.6692 10.4895C19.0474 10.5465 19.4269 10.6218 19.8076 10.7154V11.9693C19.4333 11.8385 19.0612 11.7436 18.6913 11.6846C18.3214 11.6257 17.9243 11.5962 17.4999 11.5962C16.8602 11.5962 16.2406 11.6754 15.6413 11.8337C15.0419 11.992 14.4756 12.2129 13.9423 12.4962ZM6.49995 16.0193C7.32817 16.0193 8.13394 16.1132 8.91727 16.301C9.70061 16.4888 10.4782 16.7834 11.25 17.1847V7.35388C10.5474 6.8962 9.78715 6.55293 8.9692 6.32408C8.15125 6.09523 7.32817 5.98081 6.49995 5.98081C5.89995 5.98081 5.33938 6.02792 4.81823 6.12213C4.29708 6.21637 3.7615 6.37053 3.2115 6.58463C3.13457 6.61028 3.08008 6.64715 3.04803 6.69523C3.01597 6.74332 2.99995 6.7962 2.99995 6.85388V16.3116C2.99995 16.4013 3.032 16.467 3.0961 16.5087C3.16022 16.5504 3.23074 16.5552 3.30768 16.5231C3.78203 16.3616 4.28266 16.2372 4.80957 16.15C5.33649 16.0629 5.89995 16.0193 6.49995 16.0193ZM12.7499 17.1847C13.5217 16.7834 14.2993 16.4888 15.0826 16.301C15.866 16.1132 16.6717 16.0193 17.4999 16.0193C18.0999 16.0193 18.6634 16.0629 19.1903 16.15C19.7172 16.2372 20.2179 16.3616 20.6922 16.5231C20.7692 16.5552 20.8397 16.5504 20.9038 16.5087C20.9679 16.467 21 16.4013 21 16.3116V6.85388C21 6.7962 20.9839 6.74492 20.9519 6.70004C20.9198 6.65515 20.8653 6.61668 20.7884 6.58463C20.2384 6.37053 19.7028 6.21637 19.1817 6.12213C18.6605 6.02792 18.0999 5.98081 17.4999 5.98081C16.6717 5.98081 15.8486 6.09523 15.0307 6.32408C14.2127 6.55293 13.4525 6.8962 12.7499 7.35388V17.1847ZM11.9999 19.3846C11.1935 18.7897 10.3237 18.3301 9.39032 18.0058C8.45699 17.6814 7.49353 17.5192 6.49995 17.5192C5.8897 17.5192 5.29035 17.5869 4.7019 17.7221C4.11343 17.8574 3.54613 18.0564 2.99998 18.3192C2.64358 18.4833 2.30447 18.4574 1.98267 18.2413C1.66089 18.0253 1.5 17.7192 1.5 17.3231V6.46544C1.5 6.25005 1.55544 6.04781 1.66633 5.85871C1.77723 5.66961 1.93717 5.53339 2.14615 5.45006C2.82307 5.12058 3.52851 4.87667 4.26248 4.71833C4.99644 4.56 5.74227 4.48083 6.49995 4.48083C7.47303 4.48083 8.42368 4.61385 9.35188 4.87988C10.2801 5.1459 11.1628 5.53853 11.9999 6.05776C12.8371 5.53853 13.7198 5.1459 14.648 4.87988C15.5762 4.61385 16.5269 4.48083 17.4999 4.48083C18.2576 4.48083 19.0035 4.56 19.7374 4.71833C20.4714 4.87667 21.1768 5.12058 21.8538 5.45006C22.0627 5.53339 22.2227 5.66961 22.3336 5.85871C22.4445 6.04781 22.4999 6.25005 22.4999 6.46544V17.3231C22.4999 17.7192 22.3326 18.0221 21.998 18.2317C21.6634 18.4413 21.3115 18.4641 20.9422 18.3C20.4025 18.0436 19.8432 17.8494 19.2643 17.7173C18.6855 17.5853 18.0974 17.5192 17.4999 17.5192C16.5064 17.5192 15.5429 17.6814 14.6096 18.0058C13.6762 18.3301 12.8064 18.7897 11.9999 19.3846Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

IconLanguageCourse.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  sx: PropTypes.object,
};

export default IconLanguageCourse;
