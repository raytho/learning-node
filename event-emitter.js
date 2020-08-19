const EventEmitter = require("events");

class Logger extends EventEmitter {
  execute(cb) {
    console.log("Before");
    this.emit("start");
    cb();
    this.emit("finish");
    console.log("after");
  }
}

const logger = new Logger();

logger.on("start", () => console.log("Starting"));
logger.on("finish", () => console.log("Finishing"));
logger.on("finish", () => console.log("It's done"));

//logger.execute(() => console.log("Mesaje"));
logger.execute(() => setTimeout(() => console.log("Mensaje hola"), 200));
