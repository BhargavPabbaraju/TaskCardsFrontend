export const API_BASE = "http://127.0.0.1:5000";

export async function getSampleMessage(): Promise<string> {
    const res = await fetch(`${API_BASE}/api/sample`);
    if(!res.ok) { throw new Error("Failed to fetch sample message");}
    const data = await res.json();
    return data.message;
}