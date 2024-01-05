import { NavLink } from "react-router-dom";

import { AppShell, Container, Group, Burger, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import classes from "./style.module.css";

const links = [
  { link: "/", label: "Home" },
  { link: "/about", label: "About" },
  { link: "/admin", label: "Dashboard" },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);

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
              className={({ isActive }) => {
                return isActive ? classes.active : classes.link;
              }}
              key={i}
              to={item.link}
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
