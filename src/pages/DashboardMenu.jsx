import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useTranslation } from 'react-i18next';
import { fileDialog } from 'file-select-dialog';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Box from '@mui/material/Box';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import PeopleIcon from '@mui/icons-material/People';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import ScheduleIcon from '@mui/icons-material/Schedule';
import MenuCard from '../components/MenuCard';
import { congAccountConnectedState, isAdminCongState } from '../states/congregation';
import { appLangState, backupDbOpenState, isOnlineState, restoreDbOpenState } from '../states/main';
import { dbAddManualSource } from '../indexedDb/dbSourceMaterial';
import { appMessageState, appSeverityState, appSnackOpenState } from '../states/notification';
import { epubFileState, isImportEPUBState, isImportJWOrgState } from '../states/sourceMaterial';

const DashboardMenu = () => {
  const { t } = useTranslation();

  const appLang = useRecoilValue(appLangState);

  const setAppSnackOpen = useSetRecoilState(appSnackOpenState);
  const setAppSeverity = useSetRecoilState(appSeverityState);
  const setAppMessage = useSetRecoilState(appMessageState);
  const setEpubFile = useSetRecoilState(epubFileState);
  const setIsImportEPUB = useSetRecoilState(isImportEPUBState);
  const setIsImportJWOrg = useSetRecoilState(isImportJWOrgState);
  const setIsBackupDb = useSetRecoilState(backupDbOpenState);
  const setIsRestoreDb = useSetRecoilState(restoreDbOpenState);

  const isAdminCong = useRecoilValue(isAdminCongState);
  const isCongAccountConnected = useRecoilValue(congAccountConnectedState);
  const isOnline = useRecoilValue(isOnlineState);

  const handleWeekAdd = async () => {
    await dbAddManualSource();
    setAppSnackOpen(true);
    setAppSeverity('success');
    setAppMessage(t('sourceMaterial.weekAdded'));
  };

  const handleImportEPUB = async () => {
    const file = await fileDialog({
      accept: '.epub',
      strict: true,
    });

    const epubLang = file.name.split('_')[1];
    if (epubLang && epubLang === appLang.toUpperCase()) {
      setEpubFile(file);
      setIsImportEPUB(true);
    } else {
      setAppSnackOpen(true);
      setAppSeverity('warning');
      setAppMessage(t('sourceMaterial.invalidFilename'));
    }
  };

  const handleImportJWOrg = () => {
    setIsImportJWOrg(true);
  };

  const handleCreateBackup = () => {
    setIsBackupDb(true);
  };

  const handleRestoreBackup = () => {
    setIsRestoreDb(true);
  };

  const dashboardMenus = [
    {
      title: t('dashboard.persons'),
      visible: true,
      links: [
        {
          title: t('dashboard.persons'),
          icon: <PeopleIcon />,
          disabled: false,
          visible: true,
          navigateTo: '/persons',
        },
        {
          title: t('dashboard.personAdd'),
          icon: <PersonAddIcon />,
          disabled: false,
          visible: true,
          navigateTo: '/persons/new',
        },
      ],
    },
    {
      title: t('dashboard.schedule'),
      visible: true,
      links: [
        {
          title: t('dashboard.viewAssignmentsSchedule'),
          icon: <ScheduleIcon />,
          disabled: false,
          visible: true,
          navigateTo: '/schedules/view',
        },
        {
          title: t('dashboard.editAssignmentsSchedule'),
          icon: <AssignmentIcon />,
          disabled: false,
          visible: true,
          navigateTo: '/schedules',
        },
      ],
    },
    {
      title: t('dashboard.sourceMaterial'),
      visible: true,
      links: [
        {
          title: t('dashboard.viewSourceMaterial'),
          icon: <CalendarMonthIcon />,
          disabled: false,
          visible: true,
          navigateTo: '/source-materials',
        },
        {
          title: t('dashboard.weekAddNew'),
          icon: <MoreTimeIcon />,
          disabled: false,
          visible: true,
          action: handleWeekAdd,
        },
        {
          title: t('dashboard.sourceImportEPUB'),
          icon: <FileCopyIcon />,
          disabled: false,
          visible: true,
          action: handleImportEPUB,
        },
        {
          title: t('dashboard.sourceImportJw'),
          icon: <CloudSyncIcon />,
          disabled: isOnline ? false : true,
          visible: true,
          action: handleImportJWOrg,
        },
      ],
    },
    {
      title: t('global.congregation'),
      visible: true,
      links: [
        {
          title: t('global.sendBackup'),
          icon: <CloudUploadIcon />,
          disabled: false,
          visible: isCongAccountConnected ? true : false,
          action: handleCreateBackup,
        },
        {
          title: t('global.restoreBackup'),
          icon: <CloudDownloadIcon />,
          disabled: false,
          visible: isCongAccountConnected ? true : false,
          action: handleRestoreBackup,
        },
        {
          title: t('dashboard.manageAccessToApps'),
          icon: <AccountCircleIcon />,
          disabled: false,
          visible: isAdminCong ? true : false,
          navigateTo: '/administration',
        },
        {
          title: t('global.settings'),
          icon: <SettingsIcon />,
          disabled: false,
          visible: true,
          navigateTo: '/congregation-settings',
        },
      ],
    },
  ];

  return (
    <Box sx={{ padding: '20px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      {dashboardMenus.map((menu, index) => (
        <MenuCard key={`menu-item-${index}`} menu={menu} />
      ))}
    </Box>
  );
};

export default DashboardMenu;