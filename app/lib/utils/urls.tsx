const BASE_API = process.env.NEXT_PUBLIC_BASE_API;

export const fetchJobUrl = BASE_API + "search?";
export const jobDetailUrl = BASE_API + "/job-details?job_id=";
