import { TextInput, ActionIcon, useMantineTheme, rem } from "@mantine/core";
import { IconSearch, IconArrowRight } from "@tabler/icons-react";

export function Search(props) {
  const theme = useMantineTheme();

  return (
    <TextInput
      radius="xl"
      size="md"
      placeholder="Search books"
      rightSectionWidth={50}
      leftSection={
        <IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      }
      rightSection={
        <ActionIcon
          size={32}
          radius="xl"
          color={theme.primaryColor}
          variant="filled"
        >
          <IconArrowRight
            style={{ width: rem(18), height: rem(18) }}
            stroke={1.5}
          />
        </ActionIcon>
      }
      {...props}
    />
  );
}
