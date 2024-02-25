'use client';
import { Box, Stack, Typography, styled } from '@mui/material';
import MenuButton from './MenuButton';
import { Colors } from '../theme/colors';
import { useState } from 'react';

const MainMenuFrame = styled(Box, { name: 'MainMenuFrameComponent', slot: 'Root' })(({}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '6px',
  gap: 4,
  boxShadow: `2px 2px 16px 2px ${Colors.secondary}`,
  background: `radial-gradient(circle, rgba(0,0,0,0.2) 10%, rgba(0,0,0,1)), url("images/main-menu-bg.webp")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center'
}));

const MainMenu = () => {
  const [selection, setSelection] = useState<string | undefined>('');
  const handleButtonClick = (param: string) => {
    setSelection(param);
  };

  return (
    <Stack gap="50px" flexDirection="column">
      <Typography align="center" variant="h3">
        {selection}
      </Typography>
      <MainMenuFrame>
        <MenuButton title="بازی جدید" onButtonClick={handleButtonClick} />
        <MenuButton title="ادامه دهید" onButtonClick={handleButtonClick} />
        <MenuButton title="گزینه ها" onButtonClick={handleButtonClick} />
        <MenuButton title="ترک کردن" onButtonClick={handleButtonClick} />
      </MainMenuFrame>
    </Stack>
  );
};

export default MainMenu;
