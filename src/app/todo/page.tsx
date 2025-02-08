import { AnalyticsProvider } from "./components/AnalyticsContext";
import TodoList from "./components/TodoList";
import Button from "./components/Button";
import AnalyticsPanel from "./components/AnalyticsPanel";
import { Container } from "@mui/material";
const Page = () => {
  return (
    <AnalyticsProvider>
      <Container>
        <TodoList />
        <Button />
        <AnalyticsPanel />
      </Container>
    </AnalyticsProvider>
  );
};
export default Page;
