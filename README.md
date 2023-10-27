# Tamagui Design System Template

This monorepo is a starter for an Expo + Tamagui app. 

## 📦 Included packages
- [Tamagui](https://tamagui.dev)
- [Expo SDK](https://docs.expo.dev)

## 🗂️ Folder layout
- `native` the Expo app
- `packages` shared packages across apps
	- `ui` includes your custom design system components, themes and colors
	- `tsconfig` includes tsconfig files that can be extended from other packages or the apps

## 🏁 Start the app
- Step 1: Install the dependencies:
```bash
yarn install
```
- Step 2: Run the app
```bash
yarn workspace native ios
```

**Note:** Note we're following the [design systems guide](https://tamagui.dev/docs/guides/design-systems) and creating our own package for the design system.

See packages/ui named @package/ui for how this works.

## ➕ Add new dependencies

### To the package
```bash
yarn workspace ui add some-package
```

### To the app
```bash
yarn workspace native add react-native-reanimated
```