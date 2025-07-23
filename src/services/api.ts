import axios from "axios";
import type { ExtractedReport } from "../types";

const API_URL = process.env.BUN_PUBLIC_API_URL;

export async function uploadPDF(file: File): Promise<ExtractedReport> {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axios.post(`${API_URL}/upload`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response.data as ExtractedReport;
}
