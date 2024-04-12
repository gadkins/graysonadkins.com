import fs from "fs";
import { join, relative } from "path";

const notebooksDirectory = join(process.cwd(), "/public/html/notebooks");

export function getNotebookBySlug(slug: string, fields: string[] = []) {
    let realSlug = Array.isArray(slug) ? slug.join('/') : slug;
    realSlug = realSlug.replace(/\.html$/, "");
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
    });

    return items;
}


// Helper function to recursively get all notebook paths
function getAllNotebookPaths(dir: string, allPaths: string[] = []) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    entries.forEach(entry => {
        const fullPath = join(dir, entry.name);
        if (entry.isDirectory()) {
            getAllNotebookPaths(fullPath, allPaths); // Recurse into subdirectory
        } else if (entry.isFile() && entry.name.endsWith('.html')) {
            // Store the path relative to the notebooks directory and without the .html extension
            allPaths.push(relative(notebooksDirectory, fullPath).replace(/\.html$/, ''));
        }
    });

    return allPaths;
}

export function getNotebookSlugs() {
    // This will return an array of paths relative to the notebooks directory, without the .html extension
    return getAllNotebookPaths(notebooksDirectory);
}