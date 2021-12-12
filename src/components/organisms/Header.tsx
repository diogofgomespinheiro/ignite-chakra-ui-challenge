import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Link as ChakraLink } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';

interface HeaderProps {
  previousPage?: string;
}

export function Header({ previousPage }: HeaderProps) {
  return (
    <Box as="header" w="100%" maxWidth={1440} h={100} mx="auto" px="6">
      <Flex w="100%" maxWidth={1160} mx="auto" h="100%" align="center">
        {previousPage && (
          <Link href="/" passHref>
            <ChakraLink>
              <ChevronLeftIcon
                w={8}
                h={8}
                color="text.dark"
                transition="color 0.2s linear"
                _hover={{
                  color: 'highlight'
                }}
              />
            </ChakraLink>
          </Link>
        )}
        <Flex flex={1} align="center" justify="center">
          <Link href="/" passHref>
            <ChakraLink>
              <Image
                src="/assets/logo.svg"
                alt="World Trip Logo"
                height={46}
                width={184}
              />
            </ChakraLink>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
