#!/usr/bin/env node

/**
 * Plugin Validation Tool
 * Validates plugin structure and manifest
 */

const fs = require('fs');
const path = require('path');

function validatePlugin(pluginPath) {
  console.log(`Validating ${pluginPath}...`);

  // Check manifest.json exists
  const manifestPath = path.join(pluginPath, 'manifest.json');
  if (!fs.existsSync(manifestPath)) {
    throw new Error('manifest.json not found');
  }

  // Parse and validate manifest
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

  const required = ['id', 'name', 'version', 'description', 'author', 'main'];
  for (const field of required) {
    if (!manifest[field]) {
      throw new Error(`Missing required field: ${field}`);
    }
  }

  // Check package.json exists
  if (!fs.existsSync(path.join(pluginPath, 'package.json'))) {
    throw new Error('package.json not found');
  }

  // Check README.md exists
  if (!fs.existsSync(path.join(pluginPath, 'README.md'))) {
    console.warn('⚠️  README.md not found (recommended)');
  }

  console.log('✅ Validation passed');
  return true;
}

// Validate all plugins
const officialPlugins = fs.readdirSync('official', { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => path.join('official', d.name));

const communityPlugins = fs.existsSync('community')
  ? fs.readdirSync('community', { withFileTypes: true })
      .filter(d => d.isDirectory())
      .map(d => path.join('community', d.name))
  : [];

const allPlugins = [...officialPlugins, ...communityPlugins];

console.log(`Found ${allPlugins.length} plugins to validate\n`);

let errors = 0;
for (const plugin of allPlugins) {
  try {
    validatePlugin(plugin);
  } catch (error) {
    console.error(`❌ ${plugin}: ${error.message}`);
    errors++;
  }
}

if (errors > 0) {
  console.error(`\n❌ ${errors} plugin(s) failed validation`);
  process.exit(1);
} else {
  console.log(`\n✅ All plugins validated successfully`);
}
