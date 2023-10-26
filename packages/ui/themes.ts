import { TamaguiBaseTheme } from "tamagui";
import { lightColors, darkColors } from "@tamagui/themes";
import { colors } from "./colors";

// Note: This is a simple implementation of defining themes. If you would like to learn a more concise way, check out https://tamagui.dev/docs/guides/theme-builder 

export const dark: TamaguiBaseTheme = {
	...darkColors,
	background: colors.black,
	backgroundFocus: colors.black,
	backgroundHover: colors.neutral900,
	backgroundPress: colors.black,
	borderColor: colors.neutral900,
	borderColorFocus: colors.neutral200,
	borderColorHover: colors.neutral100,
	borderColorPress: colors.neutral200,
	color: colors.brandPrimary,
	colorFocus: colors.brand300,
	colorHover: colors.brand400,
	colorPress: colors.brand300,
	shadowColor: colors.neutral900,
	shadowColorFocus: colors.neutral700,
	shadowColorHover: colors.neutral900,
	shadowColorPress: colors.neutral700
}

export const light: TamaguiBaseTheme = {
	...lightColors,
	background: colors.white,
	backgroundFocus: colors.neutral300,
	backgroundHover: colors.neutral200,
	backgroundPress: colors.neutral300,
	borderColor: colors.neutral100,
	borderColorFocus: colors.neutral800,
	borderColorHover: colors.neutral900,
	borderColorPress: colors.neutral800,
	color: colors.brandPrimary,
	colorFocus: colors.brand900,
	colorHover: colors.brand700,
	colorPress: colors.brand900,
	shadowColor: colors.neutral100,
	shadowColorFocus: colors.neutral300,
	shadowColorHover: colors.neutral100,
	shadowColorPress: colors.neutral300
}