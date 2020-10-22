const chokidar = require("chokidar");
const debounce = require("debounce");
const spawn = require("cross-spawn");

const WATCH_PATHS = ["./src", "./features"];

// TODO Is this cross platform?
const clearConsole = () => process.stdout.write("\033c");

// We debounce the test runs so it doesn't get spammy
const runTests = debounce(() => {
  clearConsole();

  const result = spawn.sync("npm", ["test"], {
    stdio: "inherit",
  });
}, 200);

// Every file change we run the tests
chokidar.watch(WATCH_PATHS).on("all", (event, path) => {
  runTests();
});
