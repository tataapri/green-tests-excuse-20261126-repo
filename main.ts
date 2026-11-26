import { mkdirSync, writeFileSync } from "node:fs";

const entry = "All tests are green because they test the mock, not the code — I test-drove a cardboard car and declared it roadworthy.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
