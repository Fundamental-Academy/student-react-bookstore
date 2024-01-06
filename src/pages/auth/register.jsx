import { Form, Link } from "react-router-dom";
import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Button,
} from "@mantine/core";

import classes from "./style.module.css";

export function PageRegister() {
  return (
    <>
      <Title ta="center" className={classes.title}>
        Bookstore Register
      </Title>

      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Already have an account?{" "}
        <Anchor component={Link} to="/auth">
          Login
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Form>
          <TextInput label="Username" placeholder="Input username" required />

          <PasswordInput
            label="Password"
            placeholder="Input password"
            required
            mt="md"
          />

          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm password"
            required
            mt="md"
          />

          <Button fullWidth mt="xl">
            Sign up
          </Button>
        </Form>
      </Paper>
    </>
  );
}