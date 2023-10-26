import { TamaguiBaseTheme } from "tamagui";
import { lightColors, darkColors } from "@tamagui/themes";
import { colors } from "./colors";

// Note: This is a simple implementation of defining themes. If you would like to learn a more concise way, check out https://tamagui.dev/docs/guides/theme-builder 

export const dark_brand: TamaguiBaseTheme = {
	...darkColors,
	background: colors.brand800,
	backgroundFocus: colors.brand600,
	backgroundHover: colors.brand700,
	backgroundPress: colors.brand600,
	borderColor: colors.brand400,
	borderColorFocus: colors.brand500,
	borderColorHover: colors.brand500,
	borderColorPress: colors.brand400,
	color: colors.brand200,
	colorFocus: colors.brand300,
	colorHover: colors.brand400,
	colorPress: colors.brand300,
	shadowColor: colors.neutral900,
	shadowColorFocus: colors.neutral700,
	shadowColorHover: colors.neutral900,
	shadowColorPress: colors.neutral700
}

export const light_brand: TamaguiBaseTheme = {
	...lightColors,
	background: colors.brand100,
	backgroundFocus: colors.brand300,
	backgroundHover: colors.brand200,
	backgroundPress: colors.brand300,
	borderColor: colors.brandPrimary,
	borderColorFocus: colors.neutral800,
	borderColorHover: colors.neutral900,
	borderColorPress: colors.brandPrimary,
	color: colors.brandPrimary,
	colorFocus: colors.brand900,
	colorHover: colors.brand700,
	colorPress: colors.brand900,
	shadowColor: colors.neutral100,
	shadowColorFocus: colors.neutral300,
	shadowColorHover: colors.neutral100,
	shadowColorPress: colors.neutral300
}