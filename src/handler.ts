import { create_new_note } from "./db";

export function create_note_controller(note: string) {
    try {
        create_new_note(note);
        console.log(`${note} added successfully!`);
    } catch (err) {
        console.error(err);
        console.error("Oops, error!");
    }
}
