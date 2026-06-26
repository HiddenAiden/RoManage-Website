# RoManager V2 Website

Static GitHub Pages starter for the future Roblox OAuth flow.

## Pages Setup

1. Push this folder to a GitHub repository.
2. Open the repository on GitHub.
3. Go to `Settings -> Pages`.
4. Set `Source` to `Deploy from a branch`.
5. Set `Branch` to `main` and `Folder` to `/root`.
6. Save.

Your callback URL will look like:

```text
https://YOUR_USERNAME.github.io/REPOSITORY_NAME/callback/
```

Use that URL in the Roblox OAuth app redirect URL list.

## Important

GitHub Pages is static. It must not store a Roblox OAuth client secret or exchange authorization codes for tokens. Add a secure backend later for the token exchange.
