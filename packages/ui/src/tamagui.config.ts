import { tokens } from "@tamagui/themes/v2"
import { createTamagui, createTokens } from "tamagui"
import { colors } from "./colors"
import { dark_brand, light_brand } from "./themes"

const myTokens = createTokens({
	...tokens,
	color: colors,
})

const appConfig = createTamagui({
	themes: {
		light_brand,
		dark_brand,
	},
	tokens: myTokens,
})

export type AppConfig = typeof appConfig

declare module "tamagui" {
	interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig
