import { useCallback } from "react";

interface UseDownloadOptions {
  /**
   * The file path relative to the public directory
   * Example: "/files/resume.pdf"
   */
  filePath: string;
  /**
   * Optional: Custom filename for the downloaded file
   * If not provided, will use the original filename from filePath
   */
  filename?: string;
}

/**
 * A reusable hook for downloading files
 * @returns A function that triggers the download
 */
export const useDownload = ({ filePath, filename }: UseDownloadOptions) => {
  const download = useCallback(() => {
    // Create an anchor element
    const link = document.createElement("a");
    link.href = filePath;

    // Use custom filename if provided, otherwise extract from filePath
    const downloadName = filename || filePath.split("/").pop() || "download";
    link.download = downloadName;

    // Trigger download
    document.body.appendChild(link);
    link.click();

    // Cleanup
    document.body.removeChild(link);
  }, [filePath, filename]);

  return download;
};
