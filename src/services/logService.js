// interface for raven

function init() {}

function log(error) {
  console.error(error);
}

export default {
  init,
  log
};
