/**
 * Hello World Plugin
 * A simple example plugin to demonstrate BigMind plugin capabilities
 */

import type { IPluginContext } from '@bigmind/plugin-system';

export async function activate(context: IPluginContext): Promise<void> {
  console.log('👋 [Hello World] Plugin activated!');
  
  // Register a simple command
  context.commands?.register('hello.world', () => {
    console.log('Hello from BigMind plugin system!');
    console.log('🎉 Your plugin is working correctly.');
  });
  
  // Listen to node creation events (example)
  context.events?.on('mindmap.nodeCreated', (data: any) => {
    console.log('📝 [Hello World] A new node was created:', data);
  });
}

export async function deactivate(): Promise<void> {
  console.log('👋 [Hello World] Plugin deactivated');
}
