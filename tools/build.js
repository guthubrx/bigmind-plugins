#!/usr/bin/env node

/**
 * Plugin Build Tool
 * Builds all plugins
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function buildPlugin(pluginPath) {
  console.log(`Building ${pluginPath}...`);

  const packageJson = path.join(pluginPath, 'package.json');
  if (!fs.existsSync(packageJson)) {
    console.warn(`⚠️  ${pluginPath}: No package.json, skipping`);
    return;
  }

  try {
    execSync('npm install', { cwd: pluginPath, stdio: 'inherit' });
    execSync('npm run build', { cwd: pluginPath, stdio: 'inherit' });
    console.log(`✅ ${pluginPath} built successfully`);
  } catch (error) {
    console.error(`❌ ${pluginPath}: Build failed`);
    throw error;
  }
}

// Build all plugins
const officialPlugins = fs.readdirSync('official', { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => path.join('official', d.name));

const communityPlugins = fs.existsSync('community')
  ? fs.readdirSync('community', { withFileTypes: true })
      .filter(d => d.isDirectory())
      .map(d => path.join('community', d.name))
  : [];

const allPlugins = [...officialPlugins, ...communityPlugins];

console.log(`Building ${allPlugins.length} plugin(s)\n`);

for (const plugin of allPlugins) {
  buildPlugin(plugin);
}

console.log('\n✅ All plugins built successfully');
