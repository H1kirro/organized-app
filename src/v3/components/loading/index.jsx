import Box from '@mui/material/Box';
import IconLoading from '../icons/IconLoading';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Loading = () => {
  const { t } = useTranslation();

  const boxStyles = {
    height: '156px',
    width: '156px',
    backgroundColor: 'var(--always-white-base)',
    borderRadius: 'var(--radius-xxl, 16px)',
    display:'flex',
    padding:'24px 40px',
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    boxShadow: '0px 16px 24px 0px rgba(28, 28, 28, 0.16)'

  };
  const circleLoading={
    width: '72px',
    height: '72px',
  }
  const textStyle={
    color: 'var(--accent-main)',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '550',
    lineHeight: '20px'
  }

  return (
    <Box sx={boxStyles}>
      <IconLoading sx={circleLoading} color='var(--accent-main)'/>
      <Typography  sx={textStyle} mt={2}>{t('Loading...')}</Typography>
    </Box>
  );
};

export default Loading;