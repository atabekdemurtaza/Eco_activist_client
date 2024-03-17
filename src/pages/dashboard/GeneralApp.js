// material
import { Container, Grid, Stack } from "@material-ui/core";
// hooks
import useAuth from "../../hooks/useAuth";
import useSettings from "../../hooks/useSettings";
// components
import Page from "../../components/Page";
import { AppWelcome } from "../../components/_dashboard/general-app";
import {
  BankingIncome,
  BankingInviteFriends,
  BankingRecentTransitions,
} from "src/components/_dashboard/general-banking";

// ----------------------------------------------------------------------

export default function GeneralApp() {
  const { themeStretch } = useSettings();
  const { user } = useAuth();

  return (
    <Page title="General: App | Minimal-UI">
      <Container maxWidth={themeStretch ? false : "xl"}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <AppWelcome displayName={user.displayName} />
          </Grid>

          <Grid item xs={12} md={6}>
            <BankingIncome />
          </Grid>

          <Grid item xs={12} md={6} lg={12}>
            <BankingRecentTransitions />
          </Grid>
          <Grid item xs={12} md={6} lg={8}></Grid>
          <Grid item xs={12} md={6} lg={4}>
            <BankingInviteFriends />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
