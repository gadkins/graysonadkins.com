import fs from "fs";
import { join } from "path";

const notebooksDirectory = join(process.cwd(), "_notebooks");

export function getNotebookSlugs() {
    return fs.readdirSync(notebooksDirectory);
}

export function getNotebookBySlug(slug: string, fields: string[] = []) {
    const realSlug = slug.replace(/\.html$/, "");
    const fullPath = join(notebooksDirectory, `${realSlug}.html`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    type Items = {
        [key: string]: string;
    };

    const items: Items = {};

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === "slug") {
            items[field] = realSlug;
        }
        if (field === "content") {
            items[field] = fileContents;
        }
        if (field === "fullPath") {
            items[field] = fullPath;
        }
    });

    return items;
}

export function getAllNotebooks(fields: string[] = []) {
    const slugs = getNotebookSlugs();
    const notebooks = slugs
        .map((slug) => getNotebookBySlug(slug, fields))
        // sort notebooks by date in descending order
        .sort((notebook1, notebook2) => (notebook1.date > notebook2.date ? -1 : 1));
    return notebooks;
}