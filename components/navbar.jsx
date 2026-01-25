"use client";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Stack,
  Heading,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

const Links = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "#menu" },
  { name: "Order", href: "#order" },
  { name: "Contact", href: "#contact" },
];

const NavLink = ({ href, children }) => (
  <Button
    as={NextLink}
    href={href}
    variant="ghost"
    fontWeight="500"
    _hover={{ bg: "purple.100" }}
  >
    {children}
  </Button>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      px={6}
      boxShadow="sm"
      position="sticky"
      top="0"
      zIndex="1000"
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">

        {/* Logo */}
        <Heading
          size="md"
          color="purple.600"
          letterSpacing="wide"
        >
          PurpleCrust Bakery
        </Heading>

        {/* Desktop menu */}
        <HStack spacing={6} display={{ base: "none", md: "flex" }}>
          {Links.map(link => (
            <NavLink key={link.name} href={link.href}>
              {link.name}
            </NavLink>
          ))}
        </HStack>

        {/* Mobile toggle */}
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Toggle Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {/* Mobile menu */}
      {isOpen && (
        <Box pb={4} display={{ md: "none" }}>
          <Stack spacing={2}>
            {Links.map(link => (
              <NavLink key={link.name} href={link.href}>
                {link.name}
              </NavLink>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
}
