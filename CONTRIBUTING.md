# 🤝 Contributing to Cartae Plugins

Thank you for your interest in contributing to Cartae Plugins!

## 📋 Plugin Guidelines

### Plugin Structure

Each plugin must follow this structure:

```
my-plugin/
├── manifest.json      # Plugin metadata
├── index.ts          # Main entry point
├── package.json      # Dependencies
├── README.md         # Documentation
└── LICENSE           # License file
```

### manifest.json

Required fields:

```json
{
  "id": "my-plugin",
  "name": "My Plugin",
  "version": "1.0.0",
  "description": "Plugin description",
  "author": {
    "name": "Your Name",
    "email": "you@example.com"
  },
  "license": "MIT",
  "main": "dist/index.js",
  "permissions": [],
  "api": {
    "version": "1.0.0",
    "hooks": []
  }
}
```

## 🚀 Submitting a Plugin

### 1. Fork the Repository

```bash
git clone https://github.com/guthubrx/cartae-plugins.git
cd cartae-plugins
git checkout -b add-my-plugin
```

### 2. Add Your Plugin

```bash
# Create your plugin in community/
mkdir -p community/my-plugin
cd community/my-plugin

# Create manifest.json
cat > manifest.json <<EOF
{
  "id": "my-plugin",
  "name": "My Plugin",
  "version": "1.0.0",
  ...
}
EOF

# Add your code
# ...
```

### 3. Validate Your Plugin

```bash
npm run validate community/my-plugin
```

### 4. Create Pull Request

```bash
git add community/my-plugin
git commit -m "feat: add my-plugin"
git push origin add-my-plugin
```

Then create a Pull Request on GitHub.

## ✅ Validation Checklist

- [ ] Plugin follows the required structure
- [ ] manifest.json is valid
- [ ] Code passes linting
- [ ] README.md is included
- [ ] LICENSE file is included
- [ ] Plugin builds successfully
- [ ] No security vulnerabilities

## 📖 Resources

- [Plugin API Documentation](https://docs.cartae.app/api)
- [Plugin SDK](https://www.npmjs.com/package/@cartae/plugin-sdk)
- [Example Plugins](./official/)

## 🐛 Bug Reports

Please open an issue on the [main Cartae repository](https://github.com/guthubrx/cartae/issues).

## 💬 Questions

Join our [Discord community](https://discord.gg/cartae) for questions and discussions.
