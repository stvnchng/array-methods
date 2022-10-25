/**
 * Patreon Fullstack round 1
 */
const c1 = "/baz";
const n1 = "/bar";

const cd = (currPath, newPath) => {
  let cmds = (currPath + "/" + newPath).split("/");
  let dest = [];
  if (newPath[0] === "/") {
    return newPath;
  }
  for (const cmd of cmds) {
    if (cmd === "." || cmd === "") {
      continue;
    } else if (cmd === "..") {
      if (dest) {
        dest.pop();
      }
    } else {
      dest.push(cmd);
    }
  }

  return "/" + dest.join("/");
};

console.log(cd("/afafa/dfdfdf", "/abc/def"));

/**
 * Implement a rate limiter that handles X requests/sec
 *
 * This DS can be improved by using a LinkedList
 * There is no LL in JS and I'm just lazy
 */
class RateLimiter {
  occupied = [];

  constructor(maxRequests) {
    this.maxRequests = maxRequests;
  }

  canHandle(request) {
    if (this.occupied.length > 0) {
      if (request - this.occupied[0] >= 1000) {
        this.occupied.shift();
      }
    }

    if (this.occupied.length < this.maxRequests) {
      this.occupied.push(request);
      console.log("PASS");
    } else {
      console.log("FAIL");
    }
  }
}

const rl = new RateLimiter(2);
rl.canHandle(1000);
rl.canHandle(1100);
rl.canHandle(1200);
rl.canHandle(2000);
rl.canHandle(2100);
rl.canHandle(2200);
