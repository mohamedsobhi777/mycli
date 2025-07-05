import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const { create_note_controller } = require("./handler");

yargs(hideBin(process.argv))
    .command(
        "new <note>",
        "Creates a new note",
        (yargs) =>
            yargs.positional("note", {
                description: "The content of the note",
                type: "string",
            }),
        (argv) => {
            create_note_controller(argv.note as string);
        }
    )
    .parse();
