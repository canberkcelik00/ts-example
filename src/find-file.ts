import { glob } from "glob";

export async function findFile(rootPath: string, filename: string) {
    const files = await glob(`**/${filename}`, {cwd: rootPath, absolute: true});

    if (files.length === 0) {
        return null;
    }

    return files[0];
}