import { writeFile, readdir } from "fs/promises";
import path from "path";

async function fileExists(filename: string): Promise<boolean> {
  try {
    await readdir(path.dirname(filename));
    return true;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return false;
    } else {
      throw error;
    }
  }
}

async function generateUniqueFilename(
  originalFilename: string
): Promise<string> {
  let filename = originalFilename;
  const extension = path.extname(originalFilename);
  const filenameWithoutExtension = path.basename(originalFilename, extension);

  if (await fileExists(filename)) {
    filename = `${filenameWithoutExtension}_${new Date()
      .toISOString()
      .replace(/[-:T.]/g, "")
      .slice(0, 14)}`;
  }

  return `${filename}${extension}`;
}

export async function uploadFile(
  originalFilename: string,
  buffer: Buffer,
  uploadDirectory: string
): Promise<string> {
  // Extract file extension
  const fileExtension = originalFilename.split(".").pop()?.toLowerCase();

  // Check if the file type is allowed
  if (
    !fileExtension ||
    !["jpg", "png", "pdf", "jpeg"].includes(fileExtension)
  ) {
    throw new Error(`File type "${fileExtension}" is not allowed.`);
  }
  const filename = await generateUniqueFilename(
    path.join(uploadDirectory, originalFilename)
  );

  try {
    await writeFile(path.join(uploadDirectory, filename), buffer);
    return filename;
  } catch (error) {
    console.log("Error occurred: ", error);
    throw new Error("Failed to upload file.");
  }
}
