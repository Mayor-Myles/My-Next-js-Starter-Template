'use client';



import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Stack,
  VStack,
  HStack,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";
import Navbar from "@/components/navbar";
import ContactUs from "@/components/contactUs";
const products = [
  {
    name: "Sourdough Bread",
    price: 2500,
    img: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73",
  },
  {
    name: "Butter Croissant",
    price: 1800,
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
  },
  {
    name: "Chocolate Muffin",
    price: 1500,
    img: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec",
  },
];

export default function BakeryHome() {
  const bg = useColorModeValue("#F5F0FF", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const primary = "#B794F4";
  const accent = "#805AD5";

  return (
    <Box bg={bg} minH="100vh">
<Navbar />
      {/* HERO */}
      <Container maxW="7xl" py={{ base: 16, md: 24 }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          gap={12}
        >
          <Stack flex="1" spacing={6}>
            <Heading size="2xl">
              Freshly Baked Happiness Every Day
            </Heading>
            <Text fontSize="lg" opacity={0.8}>
              Handcrafted breads and pastries made with love, butter and premium ingredients.
            </Text>
            <HStack>
              <Button bg={accent} color="white" size="lg">
                Order Now
              </Button>
              <Button variant="outline" borderColor={accent}>
                View Menu
              </Button>
            </HStack>
          </Stack>

          <Image
            src="/hero-bread.jpg"
            rounded="2xl"
            w="full"
            maxW="420px"
            objectFit="cover"
          />
        </Flex>
      </Container>

      {/* FEATURED PRODUCTS */}
      <Container maxW="7xl" pb={20}>
        <Heading mb={10} textAlign="center">
          Our Best Sellers
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {products.map((item, i) => (
            <Box
              key={i}
              bg={cardBg}
              rounded="2xl"
              overflow="hidden"
              boxShadow="lg"
              transition="0.3s"
              _hover={{ transform: "translateY(-6px)" }}
            >
              <Image src={item.img} h="220px" w="100%" objectFit="cover" />
              <Box p={6}>
                <Heading size="md">{item.name}</Heading>
                <Text mt={2} fontSize="xl" color={accent}>
                  ₦{item.price.toLocaleString()}
                </Text>
                <Button mt={4} w="full" bg={primary}>
                  Add to Cart
                </Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      {/* WHY US */}
      <Container maxW="7xl" pb={20}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {[
            "Fresh Ingredients",
            "Baked Daily",
            "Fast Delivery",
          ].map((text, i) => (
            <VStack
              key={i}
              bg={cardBg}
              p={8}
              rounded="2xl"
              boxShadow="md"
            >
              <Badge colorScheme="purple" fontSize="md">
                Premium
              </Badge>
              <Heading size="md">{text}</Heading>
              <Text textAlign="center" opacity={0.7}>
                Quality guaranteed in every bite.
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>

      {/* CTA */}
      <Box bg={accent} color="white" py={20}>
        <Container maxW="6xl" textAlign="center">
          <Heading mb={4}>
            Taste the Difference Today
          </Heading>
          <Text mb={6}>
            Fresh breads delivered straight from our oven to your door.
          </Text>
          <Button size="lg" bg="white" color={accent}>
            Start Ordering
          </Button>
        </Container>
      </Box>
<ContactUs />
    </Box>
  );
}
