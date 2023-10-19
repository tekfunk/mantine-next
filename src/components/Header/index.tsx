'use client';
import React, { Suspense } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AppShellHeader,
  Button,
  Drawer,
  Image,
  Group,
  Stack,
  Burger,
  Flex,
  Card,
  Accordion,
  Code,
  Text,
  Avatar,
  Space,
  LoadingOverlay,
} from '@mantine/core';

import { useDisclosure } from '@mantine/hooks';
import '@mantine/core/styles.css';
import Logo from '@/src/components/Logo';
import {
  IconUserCircle,
  IconHome,
  IconRocket,
  IconBriefcase,
  IconMicroscope,
  IconHeadphonesFilled,
  IconVinyl,
  IconHelp,
} from '@tabler/icons-react';

import './header.css';

export default function Header() {
  const [opened, { open, close }] = useDisclosure(false);
  const pathname = usePathname();

  return (
    <React.Fragment>
      <AppShellHeader>
        <Group py={4} px={16} justify="space-between">
          <Link href="/" style={{ lineHeight: 1 }}>
            <Code>mr midi</Code>
          </Link>
          <Burger opened={opened} onClick={!opened ? open : close} size="sm" color='purple' />
        </Group>
      </AppShellHeader>
      <Drawer opened={opened} onClose={close} position="right" size={180} withCloseButton={false}>
        <Space h={36} />
        <Flex direction="column" justify="space-between" h="calc(100vh - 72px)">
        <Button
                leftSection={<IconHeadphonesFilled size={14} />}
                component={Link}
                href="/connected"
                onClick={close}
                className={pathname === '/connected' ? 'navbtn-active' : 'navbtn'}
              >
               CONNECTED
              </Button>
        </Flex>
      </Drawer>
    </React.Fragment>
  );
}
