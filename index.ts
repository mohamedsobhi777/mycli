#! /usr/bin/env bun
import "./src/command.ts";
import { note_table_query } from "./src/db.ts";

note_table_query.run() ; 