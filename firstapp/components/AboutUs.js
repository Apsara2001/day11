import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, ScrollView } from 'react-native';
import { PaperProvider, Text, Divider, Button } from 'react-native-paper';

export default function AboutUs() {
    const navigation = useNavigation();
    return (
        <PaperProvider>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.container}>
                    <Text variant="headlineLarge">History</Text>
                    <Divider />
                </View>
            </ScrollView>
        </PaperProvider>
    );
}
