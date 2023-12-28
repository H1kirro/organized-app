import PropTypes from 'prop-types';
import { SvgIcon } from '@mui/material';

const IconTimeChange = ({ color = '#222222', width = 24, height = 24, sx = {} }) => {
  width = width.toString();
  height = height.toString();

  return (
    <SvgIcon id="organized-icon-time-change" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2704_33896"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2704_33896)"></g>
        <mask
          id="mask1_2704_33896"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask1_2704_33896)">
          <path
            d="M15.3 16.3442L11.25 12.2942V7.24999H12.7499V11.7057L16.3442 15.3L15.3 16.3442ZM3.39809 16.0461C3.14935 15.5307 2.95351 14.9955 2.81056 14.4403C2.66763 13.8852 2.57436 13.3217 2.53076 12.7499H4.04611C4.08969 13.1897 4.16855 13.623 4.28266 14.05C4.39676 14.4769 4.54612 14.8923 4.73074 15.2961L3.39809 16.0461ZM2.53076 11.25C2.57436 10.6782 2.66924 10.1122 2.81539 9.55189C2.96154 8.99164 3.1641 8.45061 3.42309 7.92881L4.73074 8.67879C4.5397 9.08264 4.38874 9.49963 4.27784 9.92976C4.16694 10.3599 4.08969 10.8 4.04611 11.25H2.53076ZM6.63654 19.8422C6.14807 19.5025 5.69614 19.124 5.28076 18.7067C4.86538 18.2894 4.48781 17.8365 4.14806 17.348L5.45571 16.5884C5.72111 16.9653 6.01503 17.315 6.33746 17.6375C6.6599 17.9599 7.00958 18.2538 7.38651 18.5192L6.63654 19.8422ZM5.48071 7.38651L4.14806 6.63654C4.48781 6.14807 4.86538 5.69775 5.28076 5.28556C5.69614 4.87338 6.14807 4.49742 6.63654 4.15769L7.38651 5.48071C7.01985 5.74611 6.67689 6.03843 6.35766 6.35766C6.03843 6.67689 5.74611 7.01984 5.48071 7.38651ZM11.25 21.4692C10.6782 21.4256 10.1122 21.3307 9.55189 21.1845C8.99164 21.0384 8.45061 20.8358 7.92881 20.5768L8.67879 19.2692C9.08264 19.4602 9.49963 19.6112 9.92976 19.7221C10.3599 19.833 10.8 19.9102 11.25 19.9538V21.4692ZM8.67879 4.73074L7.92881 3.42309C8.45061 3.1641 8.99164 2.96154 9.55189 2.81539C10.1122 2.66924 10.6782 2.57436 11.25 2.53076V4.04611C10.8 4.0897 10.3599 4.16694 9.92976 4.27784C9.49963 4.38874 9.08264 4.5397 8.67879 4.73074ZM12.7499 21.4692V19.9538C13.2 19.9102 13.64 19.833 14.0702 19.7221C14.5003 19.6112 14.9173 19.4602 15.3211 19.2692L16.0711 20.5768C15.5493 20.8358 15.0083 21.0384 14.448 21.1845C13.8878 21.3307 13.3217 21.4256 12.7499 21.4692ZM15.3211 4.73074C14.9173 4.5397 14.5003 4.38874 14.0702 4.27784C13.64 4.16694 13.2 4.0897 12.7499 4.04611V2.53076C13.3217 2.57436 13.8878 2.66924 14.448 2.81539C15.0083 2.96154 15.5493 3.1641 16.0711 3.42309L15.3211 4.73074ZM17.3634 19.8422L16.6134 18.5192C16.9801 18.2538 17.323 17.9615 17.6423 17.6423C17.9615 17.323 18.2538 16.9801 18.5192 16.6134L19.8422 17.3634C19.5025 17.8519 19.1265 18.3047 18.7144 18.7221C18.3022 19.1394 17.8519 19.5128 17.3634 19.8422ZM18.5192 7.37691C18.2538 7.01023 17.9615 6.66887 17.6423 6.35284C17.323 6.03682 16.9801 5.74611 16.6134 5.48071L17.3634 4.15769C17.8519 4.48717 18.3022 4.8564 18.7144 5.26536C19.1265 5.67435 19.4974 6.12307 19.8269 6.61154L18.5192 7.37691ZM19.9538 11.25C19.9102 10.8 19.8314 10.3599 19.7173 9.92976C19.6032 9.49963 19.4506 9.07944 19.2596 8.66919L20.5768 7.90381C20.8256 8.43586 21.0256 8.98202 21.1769 9.54229C21.3281 10.1025 21.4256 10.6718 21.4692 11.25H19.9538ZM20.5768 16.0711L19.2692 15.3211C19.4602 14.9173 19.6112 14.5003 19.7221 14.0702C19.833 13.64 19.9102 13.2 19.9538 12.7499H21.4692C21.4256 13.3217 21.3307 13.8878 21.1845 14.448C21.0384 15.0083 20.8358 15.5493 20.5768 16.0711Z"
            fill={color}
          />
          <path
            d="M15.3 16.3442L11.25 12.2942V7.24999H12.7499V11.7057L16.3442 15.3L15.3 16.3442ZM3.39809 16.0461C3.14935 15.5307 2.95351 14.9955 2.81056 14.4403C2.66763 13.8852 2.57436 13.3217 2.53076 12.7499H4.04611C4.08969 13.1897 4.16855 13.623 4.28266 14.05C4.39676 14.4769 4.54612 14.8923 4.73074 15.2961L3.39809 16.0461ZM2.53076 11.25C2.57436 10.6782 2.66924 10.1122 2.81539 9.55189C2.96154 8.99164 3.1641 8.45061 3.42309 7.92881L4.73074 8.67879C4.5397 9.08264 4.38874 9.49963 4.27784 9.92976C4.16694 10.3599 4.08969 10.8 4.04611 11.25H2.53076ZM6.63654 19.8422C6.14807 19.5025 5.69614 19.124 5.28076 18.7067C4.86538 18.2894 4.48781 17.8365 4.14806 17.348L5.45571 16.5884C5.72111 16.9653 6.01503 17.315 6.33746 17.6375C6.6599 17.9599 7.00958 18.2538 7.38651 18.5192L6.63654 19.8422ZM5.48071 7.38651L4.14806 6.63654C4.48781 6.14807 4.86538 5.69775 5.28076 5.28556C5.69614 4.87338 6.14807 4.49742 6.63654 4.15769L7.38651 5.48071C7.01985 5.74611 6.67689 6.03843 6.35766 6.35766C6.03843 6.67689 5.74611 7.01984 5.48071 7.38651ZM11.25 21.4692C10.6782 21.4256 10.1122 21.3307 9.55189 21.1845C8.99164 21.0384 8.45061 20.8358 7.92881 20.5768L8.67879 19.2692C9.08264 19.4602 9.49963 19.6112 9.92976 19.7221C10.3599 19.833 10.8 19.9102 11.25 19.9538V21.4692ZM8.67879 4.73074L7.92881 3.42309C8.45061 3.1641 8.99164 2.96154 9.55189 2.81539C10.1122 2.66924 10.6782 2.57436 11.25 2.53076V4.04611C10.8 4.0897 10.3599 4.16694 9.92976 4.27784C9.49963 4.38874 9.08264 4.5397 8.67879 4.73074ZM12.7499 21.4692V19.9538C13.2 19.9102 13.64 19.833 14.0702 19.7221C14.5003 19.6112 14.9173 19.4602 15.3211 19.2692L16.0711 20.5768C15.5493 20.8358 15.0083 21.0384 14.448 21.1845C13.8878 21.3307 13.3217 21.4256 12.7499 21.4692ZM15.3211 4.73074C14.9173 4.5397 14.5003 4.38874 14.0702 4.27784C13.64 4.16694 13.2 4.0897 12.7499 4.04611V2.53076C13.3217 2.57436 13.8878 2.66924 14.448 2.81539C15.0083 2.96154 15.5493 3.1641 16.0711 3.42309L15.3211 4.73074ZM17.3634 19.8422L16.6134 18.5192C16.9801 18.2538 17.323 17.9615 17.6423 17.6423C17.9615 17.323 18.2538 16.9801 18.5192 16.6134L19.8422 17.3634C19.5025 17.8519 19.1265 18.3047 18.7144 18.7221C18.3022 19.1394 17.8519 19.5128 17.3634 19.8422ZM18.5192 7.37691C18.2538 7.01023 17.9615 6.66887 17.6423 6.35284C17.323 6.03682 16.9801 5.74611 16.6134 5.48071L17.3634 4.15769C17.8519 4.48717 18.3022 4.8564 18.7144 5.26536C19.1265 5.67435 19.4974 6.12307 19.8269 6.61154L18.5192 7.37691ZM19.9538 11.25C19.9102 10.8 19.8314 10.3599 19.7173 9.92976C19.6032 9.49963 19.4506 9.07944 19.2596 8.66919L20.5768 7.90381C20.8256 8.43586 21.0256 8.98202 21.1769 9.54229C21.3281 10.1025 21.4256 10.6718 21.4692 11.25H19.9538ZM20.5768 16.0711L19.2692 15.3211C19.4602 14.9173 19.6112 14.5003 19.7221 14.0702C19.833 13.64 19.9102 13.2 19.9538 12.7499H21.4692C21.4256 13.3217 21.3307 13.8878 21.1845 14.448C21.0384 15.0083 20.8358 15.5493 20.5768 16.0711Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

IconTimeChange.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  sx: PropTypes.object,
};

export default IconTimeChange;
