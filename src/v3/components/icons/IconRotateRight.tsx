import { SvgIcon, SxProps, Theme } from '@mui/material';

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
};

const IconRotateRight = ({ color = '#222222', width = 24, height = 24, sx = {} }: IconProps) => {
  return (
    <SvgIcon id="organized-icon-rotate-right" sx={{ width: `${width}px`, height: `${height}px`, ...sx }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask
          id="mask0_2473_21941"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_2473_21941)">
          <path
            d="M13.05 21.5V19.95C13.6167 19.8667 14.1709 19.7167 14.7125 19.5C15.2542 19.2834 15.7667 19 16.25 18.65L17.3038 19.7346C16.6679 20.2167 15.9939 20.6074 15.2817 20.9067C14.5696 21.2061 13.8257 21.4038 13.05 21.5ZM11.05 21.5C8.89747 21.2192 7.10934 20.2795 5.68562 18.6808C4.26191 17.0821 3.55005 15.2052 3.55005 13.05C3.55005 11.8706 3.77313 10.7654 4.2193 9.73466C4.66545 8.7039 5.27185 7.80518 6.0385 7.03851C6.80517 6.27186 7.70388 5.66546 8.73465 5.21931C9.76542 4.77315 10.8705 4.55006 12.05 4.55006H12.5077L10.6885 2.73082L11.7423 1.64624L15.3961 5.30006L11.7423 8.95389L10.6885 7.90006L12.5385 6.05004H12.05C10.1 6.05004 8.44586 6.72921 7.08752 8.08754C5.72919 9.44587 5.05002 11.1 5.05002 13.05C5.05002 14.7834 5.61669 16.3042 6.75002 17.6125C7.88336 18.9209 9.31669 19.7064 11.05 19.9693V21.5ZM18.7346 18.3039L17.65 17.25C18 16.7667 18.285 16.2558 18.5048 15.7173C18.7247 15.1789 18.8795 14.6231 18.9692 14.05H20.5C20.4167 14.8193 20.2237 15.56 19.9211 16.2721C19.6186 16.9843 19.2231 17.6616 18.7346 18.3039ZM20.5 12.05H18.9692C18.8795 11.477 18.7247 10.9212 18.5048 10.3827C18.285 9.84427 18 9.33337 17.65 8.85004L18.7346 7.79621C19.2167 8.38851 19.6064 9.04588 19.9038 9.76832C20.2013 10.4907 20.4 11.2513 20.5 12.05Z"
            fill={color}
          />
        </g>
      </svg>
    </SvgIcon>
  );
};

export default IconRotateRight;