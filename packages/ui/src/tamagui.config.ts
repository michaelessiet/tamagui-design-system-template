import { tokens } from "@tamagui/themes/v2"
import { createTamagui, createTokens } from "tamagui"
import { colors } from "./colors"
import {
	dark_brand,
	light_brand,
	dark,
	light,
	dark_error,
	dark_neutral,
	dark_success,
	dark_warning,
	light_error,
	light_neutral,
	light_success,
	light_warning,
} from "./themes"

const myTokens = createTokens({
	...tokens,
	color: colors,
})

const appConfig = createTamagui({
	themes: {
		dark,
		light,
		light_brand,
		dark_brand,
		light_error,
		dark_error,
		light_success,
		dark_success,
		light_neutral,
		dark_neutral,
		light_warning,
		dark_warning
	},
	tokens: myTokens,
})

export type AppConfig = typeof appConfig

declare module "tamagui" {
	interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig
