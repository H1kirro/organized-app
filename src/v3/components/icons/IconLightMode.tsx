import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconLightMode = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-light-mode" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2473_22045"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2473_22045)">
          <path
            d="M12 15C12.8333 15 13.5417 14.7083 14.125 14.125C14.7083 13.5416 15 12.8333 15 12C15 11.1666 14.7083 10.4583 14.125 9.87498C13.5417 9.29164 12.8333 8.99998 12 8.99998C11.1667 8.99998 10.4583 9.29164 9.875 9.87498C9.29167 10.4583 9 11.1666 9 12C9 12.8333 9.29167 13.5416 9.875 14.125C10.4583 14.7083 11.1667 15 12 15ZM12 16.5C10.7513 16.5 9.68913 16.0621 8.81348 15.1865C7.93784 14.3109 7.50003 13.2487 7.50003 12C7.50003 10.7513 7.93784 9.6891 8.81348 8.81345C9.68913 7.93782 10.7513 7.5 12 7.5C13.2487 7.5 14.3109 7.93782 15.1865 8.81345C16.0622 9.6891 16.5 10.7513 16.5 12C16.5 13.2487 16.0622 14.3109 15.1865 15.1865C14.3109 16.0621 13.2487 16.5 12 16.5ZM2 12.75C1.7875 12.75 1.60938 12.6781 1.46565 12.5343C1.32188 12.3904 1.25 12.2122 1.25 11.9997C1.25 11.7871 1.32188 11.609 1.46563 11.4654C1.60936 11.3218 1.78747 11.25 1.99998 11.25H4.25C4.46248 11.25 4.6406 11.3219 4.78435 11.4657C4.92812 11.6095 5 11.7877 5 12.0003C5 12.2129 4.92812 12.391 4.78437 12.5346C4.64062 12.6782 4.46251 12.75 4.25003 12.75H2ZM19.75 12.75C19.5375 12.75 19.3594 12.6781 19.2156 12.5343C19.0719 12.3904 19 12.2122 19 11.9997C19 11.7871 19.0719 11.609 19.2156 11.4654C19.3594 11.3218 19.5375 11.25 19.75 11.25H22C22.2125 11.25 22.3906 11.3219 22.5344 11.4657C22.6781 11.6095 22.75 11.7877 22.75 12.0003C22.75 12.2129 22.6781 12.391 22.5344 12.5346C22.3906 12.6782 22.2125 12.75 22 12.75H19.75ZM11.9997 4.99998C11.7871 4.99998 11.609 4.9281 11.4654 4.78435C11.3218 4.6406 11.25 4.46248 11.25 4.25V1.99998C11.25 1.78748 11.3219 1.60935 11.4657 1.4656C11.6095 1.32187 11.7877 1.25 12.0003 1.25C12.2129 1.25 12.391 1.32187 12.5346 1.4656C12.6782 1.60935 12.75 1.78748 12.75 1.99998V4.25C12.75 4.46248 12.6781 4.6406 12.5343 4.78435C12.3905 4.9281 12.2123 4.99998 11.9997 4.99998ZM11.9997 22.75C11.7871 22.75 11.609 22.6781 11.4654 22.5343C11.3218 22.3906 11.25 22.2125 11.25 22V19.75C11.25 19.5375 11.3219 19.3594 11.4657 19.2156C11.6095 19.0719 11.7877 19 12.0003 19C12.2129 19 12.391 19.0719 12.5346 19.2156C12.6782 19.3594 12.75 19.5375 12.75 19.75V22C12.75 22.2125 12.6781 22.3906 12.5343 22.5343C12.3905 22.6781 12.2123 22.75 11.9997 22.75ZM6.0058 7.04033L4.7481 5.81725C4.59938 5.67878 4.52758 5.50475 4.5327 5.29515C4.53783 5.08553 4.61061 4.90317 4.75102 4.74805C4.90419 4.59292 5.08398 4.51535 5.29038 4.51535C5.49679 4.51535 5.67243 4.59292 5.8173 4.74805L7.05 5.99615C7.19487 6.15128 7.2673 6.32693 7.2673 6.52308C7.2673 6.71923 7.19647 6.89486 7.0548 7.04998C6.91315 7.20509 6.74168 7.27848 6.5404 7.27015C6.33912 7.26182 6.16092 7.18519 6.0058 7.04033ZM18.1827 19.2519L16.95 18.0038C16.8051 17.8487 16.7327 17.6705 16.7327 17.4692C16.7327 17.2679 16.8051 17.0948 16.95 16.95C17.0852 16.7949 17.2543 16.7215 17.4572 16.7298C17.6601 16.7381 17.8391 16.8147 17.9942 16.9596L19.2519 18.1827C19.4006 18.3211 19.4724 18.4952 19.4673 18.7048C19.4622 18.9144 19.3894 19.0968 19.249 19.2519C19.0958 19.407 18.916 19.4846 18.7096 19.4846C18.5032 19.4846 18.3276 19.407 18.1827 19.2519ZM16.95 7.05478C16.7949 6.91313 16.7215 6.74166 16.7298 6.54038C16.7382 6.33909 16.8148 6.16089 16.9596 6.00578L18.1827 4.74808C18.3212 4.59936 18.4952 4.52756 18.7048 4.53268C18.9144 4.53781 19.0968 4.61058 19.2519 4.751C19.407 4.90417 19.4846 5.08395 19.4846 5.29035C19.4846 5.49677 19.407 5.67241 19.2519 5.81728L18.0038 7.04998C17.8487 7.19484 17.673 7.26728 17.4769 7.26728C17.2808 7.26728 17.1051 7.19644 16.95 7.05478ZM4.7481 19.254C4.59297 19.0975 4.5154 18.916 4.5154 18.7096C4.5154 18.5032 4.59297 18.3275 4.7481 18.1827L5.99618 16.95C6.15131 16.8051 6.32951 16.7327 6.53077 16.7327C6.73206 16.7327 6.90513 16.8051 7.05 16.95C7.19872 17.0852 7.26891 17.2543 7.26058 17.4572C7.25224 17.6601 7.17884 17.8391 7.04037 17.9942L5.8173 19.2519C5.67243 19.407 5.49679 19.482 5.29038 19.4769C5.08398 19.4718 4.90322 19.3975 4.7481 19.254Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconLightMode;