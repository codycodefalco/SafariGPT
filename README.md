
# ChatBotHelper 2.0

ChatBotHelper 2.0 is a lightweight Safari web extension designed to enhance your browsing experience by enabling seamless communication with OpenAI's ChatGPT. It adds a popup interface to Safari where you can ask questions, summarize content, or just chat with AI — all without leaving your current tab.

## 🚀 Features

- Safari web extension UI
- Communicates with the OpenAI API
- Minimal and clean popup interface
- Easily customizable for personal use

## 🛠 Installation & Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/ChatBotHelper2.0.git
   ```

2. Open the `ChatBotHelper2.0.xcodeproj` in Xcode.

3. In **Safari > Settings > Advanced**, enable the setting:  
   ✅ **"Allow unsigned extensions"**  
   (This is required for development.)

4. Build and run the macOS app in Xcode to install the Safari extension.

5. Open Safari and go to **Settings > Extensions**, then enable ChatBotHelper 2.0.

## 🔐 API Key Setup

To test locally, insert your [OpenAI API key](https://platform.openai.com/account/api-keys) in `popup.js`.

**⚠️ IMPORTANT:**  
Do NOT commit your real API key. Replace it with `"YOUR_OPENAI_API_KEY_HERE"` before pushing to GitHub.

## 📁 Project Structure

```
ChatBotHelper2.0/
├── ChatBotHelper2.0/                # macOS host app container
├── ChatBotHelper2.0 Extension/     # Safari Web Extension
│   ├── Resources/
│   │   ├── js/
│   │   ├── images/
│   │   ├── popup.html
│   │   ├── popup.js
│   │   ├── background.js
│   │   ├── content.js
│   │   └── manifest.json
├── Info.plist
└── README.md
```

## 📄 License

This project is open-source and available under the MIT License.

