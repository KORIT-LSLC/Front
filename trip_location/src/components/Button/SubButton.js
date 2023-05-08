import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const buttons = [
  <Button key="two">경로수정</Button>,
  <Button key="three">경로저장</Button>,
];

export default function SubButton() {
  return (
    <ButtonGroup color="primary" aria-label="medium primary button group">
      {buttons}
    </ButtonGroup>
  );
}
