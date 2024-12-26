import { Account, Avatars, Client, OAuthProvider } from "react-native-appwrite";
import * as Linking from "expo-linking";
import { openAuthSessionAsync } from "expo-web-browser";

// Configuration object to store Appwrite settings
export const config = {
  platform: process.env.EXPO_PUBLIC_APPWRITE_PLATFORM,
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
};

// Initialize Appwrite client
export const client = new Client();
client
  .setEndpoint(config.endpoint!)
  .setProject(config.projectId!)
  .setPlatform(config.platform!);

export const avatar = new Avatars(client);
export const account = new Account(client);

/**
 * Function to handle OAuth login with Google.
 * @returns {Promise<Session | false>} The user session if successful, or false if login fails.
 */
export async function login() {
  try {
    const redirectURL = Linking.createURL("/"); // Create a redirect URL for OAuth
    const response = await account.createOAuth2Token(
      OAuthProvider.Google,
      redirectURL,
    );
    if (!response) throw new Error("Failed to initiate login process");

    const browserResult = await openAuthSessionAsync(
      response.toString(),
      redirectURL,
    );
    if (browserResult.type !== "success")
      throw new Error("Failed to complete login process");

    const url = new URL(browserResult.url);
    const secret = url.searchParams.get("secret");
    const userId = url.searchParams.get("userId");
    if (!secret || !userId) throw new Error("Missing login credentials");

    const session = await account.createSession(userId, secret);
    if (!session) throw new Error("Failed to create user session");

    return session;
  } catch (error) {
    console.error(error);
    return false; // Return false if login fails
  }
}

/**
 * Function to log out the current user.
 * @returns {Promise<boolean>} True if logout is successful, or false if it fails.
 */
export async function logout() {
  try {
    await account.deleteSession("current");
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

/**
 * Function to fetch the current user's details.
 * @returns {Promise<Object | false>} The user details with an avatar, or false if fetching fails.
 */
export async function getUser() {
  try {
    const user = await account.get();
    if (user.$id) {
      const userAvatar = avatar.getInitials(user.name);
      return { ...user, avatar: userAvatar.toString() };
    }
    throw new Error("User not found");
  } catch (error) {
    console.error("Get user error:", error);
    return false;
  }
}
