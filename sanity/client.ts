import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "h5j3wqro",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});