const { writeFileSync, mkdirSync } = require('fs');

/* writeFileSync =>  Escribe un archivo*/
/* mkdirSync => Crea un directorio */


require("dotenv").config();

const targePath = "./src/environments/environments.ts";

const envFileContent = `
export const environment = {
  mapbox_key: "${process.env['MAPBOX_KEY'] }",
  otra: "PROPIEDAD",
}
`;

mkdirSync("./src/environments", { recursive: true } );

writeFileSync( targePath, envFileContent );

