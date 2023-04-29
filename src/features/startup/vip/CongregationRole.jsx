import { useTranslation } from 'react-i18next';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

const CongregationRole = ({ role, setRole }) => {
  const { t } = useTranslation('ui');

  return (
    <TextField
      id="outlined-select-type"
      select
      label={t('mainRoleLabel')}
      size="medium"
      value={role}
      onChange={(e) => setRole(e.target.value)}
      sx={{ minWidth: '250px' }}
    >
      <MenuItem value="lmmo">{t('roleLMMO')}</MenuItem>
      <MenuItem value="secretary">{t('roleSecretary')}</MenuItem>
    </TextField>
  );
};

export default CongregationRole;
