import { Link } from "react-router-dom";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

export function BookCard() {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{ width: "320px" }}
    >
      <Card.Section>
        <Image
          src="https://graphicburger.com/wp-content/uploads/2013/11/Hard-Cover-Book-MockUp-full.jpg"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Bukan Sarjana Kertas</Text>
        <Badge color="pink">Rp 50.000</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
      </Text>

      <Button
        component={Link}
        to="/book/1"
        color="blue"
        fullWidth
        mt="md"
        radius="md"
      >
        Detail
      </Button>
    </Card>
  );
}
