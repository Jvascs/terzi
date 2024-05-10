import React, { useRef } from 'react';
import {
    Box, Flex, IconButton, useColorMode, useColorModeValue, Stack,
    Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton,
    Button, useDisclosure, Menu, MenuButton, MenuList, MenuItem,Image
} from '@chakra-ui/react';
import { HamburgerIcon, MoonIcon, SunIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LuLanguages } from "react-icons/lu";

const Header = () => {
    const { t, i18n } = useTranslation();
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const flags = {
        tr: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",
        ar: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Flag_of_the_Arab_League.svg",
        qa: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg",
        en: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
        bg: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg"
    };

    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Box>{t('Logo')}</Box>
                <Flex alignItems={'center'}>
                    <IconButton
                        ref={btnRef}
                        icon={<HamburgerIcon />}
                        aria-label={t('Open Menu')}
                        display={{ sm: 'inline-flex', md: 'none' }}
                        onClick={onOpen}
                    />
                    <Stack
                        direction={{ base: 'column', md: 'row' }}
                        spacing={7}
                        align="center"
                        display={{ base: 'none', md: 'flex' }}
                    >
                        <NavLink to="/">{t('Home')}</NavLink>
                        <NavLink to="/about">{t('About')}</NavLink>
                        <NavLink to="/services">{t('Services')}</NavLink>
                        <NavLink to="/contact">{t('Contact')}</NavLink>
                        <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                {t('Account')}
                            </MenuButton>
                            <MenuList>
                                <MenuItem as={NavLink} to="/register" onClick={onClose}>{t('SignUp')}</MenuItem>
                                <MenuItem as={NavLink} to="/login" onClick={onClose}>{t('Login')}</MenuItem>
                            </MenuList>
                        </Menu>
                    </Stack>
                    <IconButton
                        ml={2}
                        onClick={toggleColorMode}
                        icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
                        isRound
                        size="md"
                        aria-label={t('Switch Theme')}
                    />
                    <Menu>
                        <MenuButton as={IconButton} icon={<LuLanguages />} ml={2}>
                            {t('Language')}
                        </MenuButton>
                        <MenuList>
                            {Object.keys(flags).map(lang => (
                                <MenuItem key={lang} onClick={() => changeLanguage(lang)}>
                                    <Image boxSize="20px" src={flags[lang]} mr="12px" />
                                    {t(lang)}
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>

            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>{t('Menu')}</DrawerHeader>
                    <DrawerBody>
                        <Stack spacing={4}>
                            <Button as={NavLink} to="/" onClick={onClose}>{t('Home')}</Button>
                            <Button as={NavLink} to="/about" onClick={onClose}>{t('About')}</Button>
                            <Button as={NavLink} to="/services" onClick={onClose}>{t('Services')}</Button>
                            <Button as={NavLink} to="/contact" onClick={onClose}>{t('Contact')}</Button>
                            <Button as={NavLink} to="/register" onClick={onClose}>{t('SignUp')}</Button>
                            <Button as={NavLink} to="/login" onClick={onClose}>{t('Login')}</Button>
                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export default Header;
