import { useState } from "react";

import { AppShell, Container, Group, Burger, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import classes from "./style.module.css";
import { NavLink } from "react-router-dom";

const links = [
  { link: "/", label: "Home" },
  { link: "/about", label: "About" },
  { link: "/admin", label: "Dashboard" },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

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
          {links.map((item, i) => (
            <NavLink
              className={classes.link}
              key={i}
              to={item.link}
              data-active={active === item.link || undefined}
              onClick={() => {
                setActive(item.link);
              }}
            >
              {item.label}
            </NavLink>
          ))}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </AppShell.Header>
  );
}
