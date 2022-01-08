import React from "react";
import AtlasSdk from "@atlas/sdk";
import CobaltRoot, {
  Avatar,
  Card,
  Grid,
  H1,
  H2,
  Header,
  Loader,
  Page,
  Paragraph
} from "@cobalt/cobalt-react-components";
import ThemeProvider from "@cobalt/react-theme-provider";
import { useTranslation } from "react-i18next";
import { useCurrentUser } from "./hooks";

export default function App() {
  const user = useCurrentUser();

  return (
    <CobaltRoot>
      <ThemeProvider loader={() => AtlasSdk.theme.getConfig()}>
        <AppContent user={user} />
      </ThemeProvider>
    </CobaltRoot>
  );
}

function AppContent({ user }) {
  return (
    <Page>
      <AppHeader />
      <Page.Content>
        <Grid pushCenter fullHeight>
          <Grid.Group>
            <Grid.Column all='100'>
              {!user ? <Loader /> : <Content user={user} />}
            </Grid.Column>
          </Grid.Group>
        </Grid>
      </Page.Content>
    </Page>
  )
}

function AppHeader() {
  const [t] = useTranslation();

  return (
    <Header contained borderless>
      <Header.Heading>
        <Header.Title>
          <H1>
            {t('Connected to Atlas')}
          </H1>
        </Header.Title>
      </Header.Heading>
    </Header>
  )
}

function Content({ user }) {
  return (
    <Card>
      <Header borderless>
        <Avatar primary>{getInitials(user.name)}</Avatar>
        <Header.Heading>
          <Header.Title>
            <H2>{user.name}</H2>
          </Header.Title>
        </Header.Heading>
      </Header>
      <Card.Content pushContent>
        <Paragraph>{user.email}</Paragraph>
      </Card.Content>
    </Card>
  )
}

function getInitials(fullname) {
  return fullname.split(' ').map((n) => n[0]).join('');
}
