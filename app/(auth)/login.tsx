import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "@/styles/auth.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";

export default function login() {
  return (
    <View style={styles.container}>
      {/* brand section */}
      <View style={styles.brandSection}>
        <View style={styles.logoContainer}>
          <Ionicons name="leaf" size={32} color={COLORS.primary} />
        </View>
        <Text style={styles.appName}>Pixora</Text>
        <Text style={styles.tagline}>click & share pictures</Text>
      </View>
      <View style={styles.illustrationContainer}>
        <Image
          source={require("@/assets/images/auth-art.png")}
          style={styles.illustration}
          resizeMode="cover"
        />
      </View>

      {/* login section */}
      <View style={styles.loginSection}>
        <TouchableOpacity
          onPress={() => console.log("google sign in")}
          style={styles.googleButton}
          activeOpacity={0.9}
        >
          <View style={styles.googleIconContainer}>
            <Ionicons name="logo-google" size={20} color={COLORS.surface} />
          </View>
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>
        <Text style={styles.termsText}>
          By continuing, you agree to our Terms and Privacy Policy.
        </Text>
      </View>
    </View>
  );
}
