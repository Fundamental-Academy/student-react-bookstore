import { useState } from "react";
import { AppShell, Container, Group, Burger, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import classes from "./style.module.css";

const links = [
  { link: "/", label: "Home" },
  { link: "/about", label: "About" },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <AppShell.Header className={classes.header}>
      <Container size="lg" className={classes.inner}>
        <Text
          size="xl"
          fw={900}
          variant="gradient"
          gradient={{ from: "blue", to: "cyan", deg: 90 }}
        >
          FunBooks
        </Text>

        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </AppShell.Header>
  );
}
