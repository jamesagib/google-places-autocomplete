import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

class GooglePlacesAutoComplete extends Component {
	render() {

		const { apiKey, language } = this.props

		const { placeholderText } = this.props.styles

		return (
			<View style={styles.wrapper}>
				<GooglePlacesAutocomplete 
					placeholder={placeholderText}
					onPress={(data, details = null) => {
						console.log(data, details);
					}}
					query={{
						key: {apiKey},
						language: {language}
					}}
				/>
			</View>
		) 
	}
}

const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}
})

export default GooglePlacesAutoComplete
