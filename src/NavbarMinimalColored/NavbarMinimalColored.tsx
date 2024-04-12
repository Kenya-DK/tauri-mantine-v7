import React, { useState } from 'react';
import { Tooltip, UnstyledButton, Stack } from '@mantine/core';
import classes from './NavbarMinimalColored.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

interface NavbarLinkProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        {Icon}
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: <FontAwesomeIcon icon={faCoffee} />, label: 'Home' },
  { icon: <FontAwesomeIcon icon={faCoffee} />, label: 'Dashboard' },
  { icon: <FontAwesomeIcon icon={faCoffee} />, label: 'Analytics' },
  { icon: <FontAwesomeIcon icon={faCoffee} />, label: 'Releases' },
  { icon: <FontAwesomeIcon icon={faCoffee} />, label: 'Account' },
  { icon: <FontAwesomeIcon icon={faCoffee} />, label: 'Security' },
  { icon: <FontAwesomeIcon icon={faCoffee} />, label: 'Settings' },
];

export function NavbarMinimalColored() {
  const [active, setActive] = useState(2);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      <Stack justify="center" gap={0}>

      </Stack>
    </nav>
  );
}