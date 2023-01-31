import yargs from "yargs";
import { hideBin } from "yargs/helpers";

let PORTconfigYargs;
yargs(hideBin(process.argv))
  .command(
    "$0",
    "Puerto default 8080",
    () => {},
    (argv) => {
      PORTconfigYargs = 8080;
    }
  )
  .command(
    "port <port>",
    "Configurar puerto para el servidor web",
    () => {},
    (argv) => {
      PORTconfigYargs = argv.port;
    }
  )
  .demandCommand()
  .parse();

export default PORTconfigYargs;
