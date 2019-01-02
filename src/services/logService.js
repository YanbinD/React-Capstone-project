// interface for raven
// import Raven from "raven-js";

function init() {
  // Raven.config("https://45aa07945dbe42a3b926ed17accbe65e@sentry.io/1363212",{
  //   release: "1-0-0",
  //   environment: "develoment-test"
  // }).install();
}

function log(error) {
  console.error(error);
  // RTCStatsEvent.captureException(error);
  
}

export default {
  init,
  log
};
