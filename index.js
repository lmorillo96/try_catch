const logger = require("./logger/index.js");

try {
  console.log("Esto se está ejecutando de manera correcta");
} catch (e) {
  logger.error("Generó error!");
} finally {
  console.log("Esto se va a ejecutar si o si");
}
