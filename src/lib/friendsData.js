import "server-only";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const FRIENDS_FILE_PATH = join(process.cwd(), "public", "friends.json");

export const getFriends = async () => {
  const file = await readFile(FRIENDS_FILE_PATH, "utf-8");
  const parsed = JSON.parse(file);
  return Array.isArray(parsed) ? parsed : [];
};

export const getFriendById = async (id) => {
  const friends = await getFriends();
  return friends.find((friend) => Number(friend.id) === Number(id)) || null;
};
