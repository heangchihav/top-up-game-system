// components/Card.tsx
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

interface CardProps {
    title: string;
    description?: string;
    imageUrl?: string;
    onPress?: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={onPress}>
            {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                {description && <Text style={styles.description}>{description}</Text>}
            </View>
        </TouchableOpacity>
    );
};

export default Card;

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 16,
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        marginVertical: 10,
        marginHorizontal: 20,
        overflow: "hidden",
    },
    image: {
        width: 180,
        height: 180,
    },
    content: {
        padding: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        color: "#666",
    },
});
