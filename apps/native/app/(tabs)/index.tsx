import { StyleSheet } from "react-native"

import EditScreenInfo from "../../components/EditScreenInfo"
import { Text, View } from "../../components/Themed"
import { Tamagui } from "@packages/ui"

export default function TabOneScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Tab One 1</Text>
			<Tamagui.Theme name={"light"}>
				<Tamagui.View backgroundColor={'$background'} padding={20}>
					<Tamagui.Text>Button</Tamagui.Text>
					<Tamagui.Button size={100} theme={"brand"}>
						<Tamagui.Button.Text>Hello</Tamagui.Button.Text>
					</Tamagui.Button>
				</Tamagui.View>
			</Tamagui.Theme>
			<View
				style={styles.separator}
				lightColor="#eee"
				darkColor="rgba(255,255,255,0.1)"
			/>
			<EditScreenInfo path="app/(tabs)/index.tsx" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		// backgroundColor:'black'
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
})
