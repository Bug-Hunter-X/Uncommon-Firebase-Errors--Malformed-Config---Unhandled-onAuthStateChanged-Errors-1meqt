# Uncommon Firebase Errors

This repository demonstrates two uncommon errors that can occur when using the Firebase JavaScript SDK:

1. **Malformed Configuration Options:**  Incorrectly configured Firebase initialization parameters (missing apiKey or projectId etc) may result in cryptic error messages.
2. **Unhandled Errors in `onAuthStateChanged`:** Failing to handle errors within the `onAuthStateChanged` listener can lead to silent failures and unexpected behavior.

The repository includes example code showcasing these errors and their respective solutions.  The solutions aim to provide better error handling and clearer diagnostics.