import { Box, Flex, Chip } from "@mantine/core";
import { Search } from "../../modules/base/components/search";
import { BookCard } from "../../modules/base/components/card";

export function HomePage() {
  return (
    <Box
      component="section"
      style={{
        position: "relative",
      }}
    >
      <Search
        style={{
          top: -20,
          left: "50%",
          transform: "translateX(-50%)",
          position: "absolute",
          width: 380,
        }}
      />

      <Flex
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
        style={{
          paddingTop: "60px",
        }}
      >
        <Chip defaultChecked variant="outline">
          All Books
        </Chip>
        <Chip variant="outline">Romance</Chip>
        <Chip variant="outline">Horror</Chip>
        <Chip variant="outline">Commedy</Chip>
        <Chip variant="outline">Biography</Chip>
        <Chip variant="outline">Technical</Chip>
      </Flex>

      <Flex
        mih={50}
        gap="xl"
        justify="center"
        align="flex-start"
        direction="row"
        wrap="wrap"
        style={{
          paddingTop: 28,
        }}
      >
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </Flex>
    </Box>
  );
}
